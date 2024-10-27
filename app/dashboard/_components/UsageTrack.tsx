"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import Link from 'next/link';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const [maxWords, setMaxWords] = useState(10000);
    const { updateCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
    const [isUsageExceeded, setIsUsageExceeded] = useState(false);

    useEffect(() => {
        if (user) {
            GetData();
            IsUserSubscribe();
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            GetData();
        }
    }, [updateCreditUsage, user]);

    const GetData = async () => {
        {/* @ts-ignore */}
        const result: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
        GetTotalUsage(result);
    }

    const IsUserSubscribe = async () => {
        {/* @ts-ignore */}
        const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));
        console.log(result);
        if (result.length > 0) {
            setUserSubscription(true);
            setMaxWords(1000000);
        }
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length);
        });

        setTotalUsage(total);
        console.log(total);

        if (!userSubscription && total >= maxWords) {
            setIsUsageExceeded(true);
        } else {
            setIsUsageExceeded(false);
        }
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-slate-500 w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full'
                        style={{
                            width: totalUsage / maxWords > 1 ? 100 + "%" : (totalUsage / maxWords) * 100 + "%"
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{maxWords} credit used</h2>
            </div>

            {isUsageExceeded && !userSubscription ? (
                <div className='text-red-500 mt-3'>
                    You have exceeded your free word limit. Please <Link href="/dashboard/billing" className='text-blue-500 underline'>upgrade</Link> to continue.
                </div>
            ) : (
                !userSubscription && (
                    <Link href="/dashboard/billing">
                        <Button
                            variant={'secondary'}
                            className='w-full my-3 text-primary bg-gray-300 hover:bg-gray-400'
                        >
                            Upgrade
                        </Button>
                    </Link>
                )
            )}
        </div>
    )
}

export default UsageTrack;

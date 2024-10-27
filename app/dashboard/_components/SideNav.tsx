"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { History, Home, Settings, Wallet } from 'lucide-react'
import Link from 'next/link'
import UsageTrack from './UsageTrack'

function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: History,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: Wallet,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]

    const path = usePathname();

    useEffect(() => {
        console.log(path)
    }, [])
    

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Link href="/" passHref>
                    <Image src="/12.png" alt="logo" width={140} height={100} />
                </Link>
            </div>

            <hr className='my-6 border' />

            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <div
                            className={`flex gap-2 mb-2 p-2 rounded-lg cursor-pointer items-center 
                            ${path == menu.path ? 'bg-primary text-white' : 'text-black hover:bg-primary hover:text-white'}`}
                        >
                            <menu.icon className='h-7 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-20 md:bottom-10 left-0 w-full'>
            <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav

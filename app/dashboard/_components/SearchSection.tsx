import { UserButton } from '@clerk/nextjs';
import { Search, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import SideNav from './SideNav';

function SearchSection({ onSearchInput }: any) {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    return (
        <div className='relative p-14 bg-gradient-to-br from-slate-800 via-slate-600 to-slate-400 flex flex-col justify-center items-center text-white'>
            
            <button
                className='md:hidden absolute top-5 left-5 focus:outline-none bg-gray-200 p-1 sm:p-2 rounded-md'
                onClick={() => setIsSideNavOpen(true)}
            >
                <Menu className='h-6 w-6 sm:h-8 sm:w-8 text-black' />
            </button>


            {isSideNavOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="w-64 bg-white shadow-md h-full">
                        <div className='flex justify-between items-center p-4 shadow-md'>
                            <button
                                className='focus:outline-none bg-gray-200 p-2 rounded-md'
                                onClick={() => setIsSideNavOpen(false)}
                            >
                                <X className='h-8 w-8 text-black' />
                            </button>
                        </div>
                        <SideNav />
                    </div>
                    <div 
                        className="flex-1 bg-black bg-opacity-50" 
                        onClick={() => setIsSideNavOpen(false)}
                    ></div>
                </div>
            )}

            <h2 className='text-3xl font-bold '>Browse All Templates</h2>
            <p>What would you like to create today?</p>
            <div className='w-full flex justify-center'>
                <div className='flex gap-2 items-center p-2 border rounded bg-white my-5 w-[40%]'>
                    <Search className='text-primary' />
                    <input
                        type="text"
                        placeholder='Search'
                        onChange={(event) => onSearchInput(event.target.value)}
                        className='bg-transparent w-full outline-none text-black'
                    />
                </div>
            </div>
            <div className="absolute top-0 right-0 m-4">
                <UserButton />
            </div>
        </div>
    );
}

export default SearchSection;

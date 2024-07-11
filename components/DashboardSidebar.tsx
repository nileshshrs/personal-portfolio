import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"



const DashboardSidebar = () => {
    return (
        <div className='hidden lg:grid gap-4 border-slate-800 border-r' style={{
            minHeight: '100vh',
            minWidth: "min(100vw, 250px)",
            position: 'sticky',
            top: "0",
            padding: '10px 20px'
        }}>
            <div className='logo flex items-start justify-start w-full'>
                <h1 className='text-2xl font-bold tracking-tight text-slate-200 mt-5 py-3'>Nilesh Shrestha</h1>
            </div>
            <nav className='min-h-full'>
                <ul className='grid gap-4 px-3'>
                    <li className='flex items-center justify-start w-full'>
                        <Link href={"/me"} className='w-full p-3 font-bold transition ease-linear rounded-sm hover:text-slate-200'>Profile</Link>
                    </li>
                    <li className='flex items-center justify-start w-full'>
                        <Link href={"/"} className='w-full p-3 font-bold transition ease-linear rounded-sm hover:text-slate-200'>Home</Link>
                    </li>
                    <li className='flex items-center justify-start w-full'>
                        <Link href={""} className='w-full p-3 font-bold transition ease-linear rounded-sm hover:text-slate-200'>Experience</Link>
                    </li>
                    <li className='flex items-center justify-start w-full'>
                        <Link href={""} className='w-full p-3 font-bold transition ease-linear rounded-sm hover:text-slate-200'>Projects</Link>
                    </li>

                </ul>
            </nav>
            <div className='px-1'>
                <Button className='bg-slate-200 w-full text-gray-800 hover:bg-slate-200'>Button</Button>
            </div>
        </div>
    )
}

export default DashboardSidebar
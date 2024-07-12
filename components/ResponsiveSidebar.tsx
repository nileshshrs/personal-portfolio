import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import Link from 'next/link'
import { BiMenuAltLeft } from "react-icons/bi";


const ResponsiveSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger><BiMenuAltLeft className='text-4xl block md:hidden' /></SheetTrigger>
            <SheetContent side={'left'} className='w-[320px] background border border-none'>
                <SheetHeader>
                    <SheetDescription>
                        <div className='grid gap-4' style={{
                            minHeight: '100vh',
                            minWidth: "min(100vw, 250px)",
                        }}>
                            <div className='logo flex items-start justify-start w-full'>
                                <h1 className='text-2xl font-bold tracking-tight text-slate-200 mt-5 py-3'>Nilesh Shrestha</h1>
                            </div>
                            <nav className='min-h-full'>
                                <ul className='grid gap-4 px-3'>
                                    <li className='flex items-center justify-start w-full px-2'>
                                        <Link href={"/me"} className='p-3 font-bold transition ease-linear rounded-sm text-lg text-slate-400 hover:text-slate-200'>Profile</Link>
                                    </li>
                                    <li className='flex items-center justify-start w-full px-2'>
                                        <Link href={"/"} className='p-3 font-bold transition ease-linear rounded-sm text-lg text-slate-400 hover:text-slate-200'>Home</Link>
                                    </li>
                                    <li className='flex items-center justify-start w-full px-2'>
                                        <Link href={""} className='p-3 font-bold transition ease-linear rounded-sm text-lg text-slate-400 hover:text-slate-200'>Experience</Link>
                                    </li>
                                    <li className='flex items-center justify-start w-full px-2'>
                                        <Link href={""} className='p-3 font-bold transition ease-linear rounded-sm text-lg text-slate-400 hover:text-slate-200'>Projects</Link>
                                    </li>

                                </ul>
                            </nav>
                            <div className='px-1'>
                                <Button className='bg-slate-200 w-full text-gray-800 hover:bg-slate-200'>Button</Button>
                            </div>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default ResponsiveSidebar
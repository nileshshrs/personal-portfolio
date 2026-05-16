'use client'

import Link from 'next/link'
import React from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

const Navbar = () => {
    const activeSection = useActiveSection()

    const getLinkClass = (sectionId: string) => {
        const baseClass = 'group flex items-center py-3'
        return activeSection === sectionId ? `${baseClass} active` : baseClass
    }

    const getIndicatorClass = (sectionId: string) => {
        const baseClass = 'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'
        return activeSection === sectionId ? `${baseClass} w-16 bg-white group-hover:bg-slate-100` : baseClass
    }

    const getTextClass = (sectionId: string) => {
        const baseClass = 'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
        return activeSection === sectionId ? `nav-text text-xs font-bold uppercase tracking-widest text-white group-hover:text-slate-100 group-focus-visible:text-slate-100` : baseClass
    }

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li>
                    <Link className={getLinkClass('about')} href="#about">
                        <span className={getIndicatorClass('about')}>
                        </span>
                        <span className={getTextClass('about')}>
                            About
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className={getLinkClass('experience')} href="#experience">
                        <span className={getIndicatorClass('experience')}>
                        </span>
                        <span className={getTextClass('experience')}>
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className={getLinkClass('projects')} href="#projects">
                        <span className={getIndicatorClass('projects')}>
                        </span>
                        <span className={getTextClass('projects')}>
                            Projects
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

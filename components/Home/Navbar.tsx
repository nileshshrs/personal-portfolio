'use client'

import Link from 'next/link'
import React from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useNavigation } from '@/hooks/useNavigation'
import { getNavLinkClass, getIndicatorClass, getTextClass } from '@/lib/utils/navClassUtils'

const Navbar = () => {
    const activeSection = useActiveSection()
    const { handleNavClick } = useNavigation(activeSection)

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li>
                    <Link className={getNavLinkClass(activeSection, 'about')} href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                        <span className={getIndicatorClass(activeSection, 'about')}>
                        </span>
                        <span className={getTextClass(activeSection, 'about')}>
                            About
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className={getNavLinkClass(activeSection, 'experience')} href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>
                        <span className={getIndicatorClass(activeSection, 'experience')}>
                        </span>
                        <span className={getTextClass(activeSection, 'experience')}>
                            Experience
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className={getNavLinkClass(activeSection, 'projects')} href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
                        <span className={getIndicatorClass(activeSection, 'projects')}>
                        </span>
                        <span className={getTextClass(activeSection, 'projects')}>
                            Projects
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

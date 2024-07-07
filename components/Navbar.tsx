import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav hidden lg:block'>
            <ul className='mt-16 w-max'>
                <li>
                    <Link href={""}>

                        <span>
                            ABOUT
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <span>EXPERIENCE</span>
                    </Link>
                </li>
                <li>
                    <Link href={""}>
                        <span>PROJECTS</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
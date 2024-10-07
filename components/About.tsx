import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id='about'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <p className='mb-4'>
                I&apos;m Nilesh Shrestha, a B.Sc. (Hons.) Computing student focused on creating user-centered digital experiences.
                I started coding in 2020, inspired by a <Link href="https://www.cleverbot.com/" target="_blank" rel="noreferrer noopener" className=' text-slate-200 hover:text-purple-300 focus-visible:text-purple-300'> Cleverbot</Link> integrated Discord bot.
                for conversations.

            </p>
            <p className='mb-4'>
                I use React, Java, Python, and Spring Boot to build accessible applications, emphasizing usability and design best practices. My skills in HTML, CSS, and JavaScript help me create intuitive interfaces.
            </p>
            <p className='mb-4'>
                Now, I'm exploring machine learning and computer vision to deepen user engagement. I enjoy blending technology and design to build software that’s both functional and enjoyable.
            </p>
        </section >
    )
}

export default About
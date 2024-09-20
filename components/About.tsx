import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id='about'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <p className='mb-4'>
                I'm Nilesh Shrestha, a B.Sc. (Hons.) Computing student passionate about crafting precise, engaging, and accessible digital experiences.
                My journey into coding began in late 2020, inspired by a Discord bot that could converse with users, which was integrated using <Link href="https://www.cleverbot.com/" target="_blank" rel="noreferrer noopener" className=' text-slate-200 hover:text-purple-300 focus-visible:text-purple-300'>Cleverbot</Link>.
                This experience opened my eyes to the possibilities of technology and sparked a desire to explore how software can enhance communication and interaction.

            </p>
            <p className='mb-4'>
                I focus on building user-centered applications using technologies like React, Java, Python, and Spring Boot. Working on various projects allows me to apply these technologies in meaningful ways.
                I'm also developing an interest in machine learning and computer vision, and I’m curious about how these technologies can enhance user experiences.
                Through hands-on experiences, I strive to improve my skills in HTML, CSS, and JavaScript, learning to implement design best practices that contribute to accessibility and functionality.
            </p>
            <p className='mb-4'>
                I enjoy the challenge of creating intuitive user interfaces that facilitate easy navigation and interaction.
            </p>
        </section >
    )
}

export default About
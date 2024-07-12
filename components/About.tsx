import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id='about'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <p className='mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                repudiandae sed ducimus neque rerum sapiente aliquam assumenda,
                quasi blanditiis debitis dolor <Link href="" className=' text-slate-200 hover:text-purple-300 focus-visible:text-purple-300'>asperiores</Link> reprehenderit at
                officiis animi odit, enim voluptatibus saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia exercitationem quidem dolore
                quibusdam accusantium debitis, iusto pariatur, expedita impedit esse mollitia sapiente totam explicabo adipisci sit qui quos doloremque facere odio commodi.
            </p>
            <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                ratione illo cum esse distinctio nisi, perspiciatis quod ut!
                Tempore consequuntur officia cupiditate voluptas ratione quam
                accusantium nesciunt assumenda facilis debitis!
            </p>
            <p className='mb-4'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusamus nisi sunt maxime delectus voluptatum ab?
            </p>
            <p className='mb-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam,
                numquam!
            </p>
        </section >
    )
}

export default About
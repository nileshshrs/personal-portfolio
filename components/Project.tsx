import React from 'react'
import Image from "next/image";

const Project = () => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Project</h2>
            </div>
            <div>
                <ul className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base" href="https://github.com/nileshshrs/simple-weixin-with-firebase" target="_blank" rel="noreferrer noopener">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span>WeChat Themed Chat&nbsp;
                                            <span className="inline-block">
                                                Application
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    A simplified chat application built with Flutter and Dart, inspired by WeChat (微信) by Tencent. This app features basic messaging capabilities, user authentication, and data storage powered by Firebase. Designed with a focus on ease of use, it allows users to engage in seamless and extended conversations
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Flutter & Dart
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                alt=""
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f3c7248-dd64-4e83-a669-4d292527556c/df04npg-abd171d4-50d0-440e-b599-6a9ce0b8d717.png/v1/fill/w_1192,h_670,q_70,strp/random_anime_girl_with_guns_vaporwave_wallpaper_by_jdsphotoshops_df04npg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOGYzYzcyNDgtZGQ2NC00ZTgzLWE2NjktNGQyOTI1Mjc1NTZjXC9kZjA0bnBnLWFiZDE3MWQ0LTUwZDAtNDQwZS1iNTk5LTZhOWNlMGI4ZDcxNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5BuT7OX9li5xpJm_cEjGQnMkFkZU2FHl-bdK2neuFsE"
                            />
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base" href="https://github.com/nileshshrs/clothing-store" target="_blank" rel="noreferrer noopener">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span>Online Clothing Store
                                            <span className="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    A responsive online clothing store using Spring Boot, PostgreSQL, and React, highlighting full-stack expertise. Involves end-to-end management, focusing on UI/UX and security with JWT authentication. GitHub source code demonstrates skills in React, relational databases, and Spring Boot
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            React
                                        </div>
                                    </li><li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Springboot
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Tailwind
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            CSS & SCSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript (ES6+)
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                alt=""
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f3c7248-dd64-4e83-a669-4d292527556c/df04npg-abd171d4-50d0-440e-b599-6a9ce0b8d717.png/v1/fill/w_1192,h_670,q_70,strp/random_anime_girl_with_guns_vaporwave_wallpaper_by_jdsphotoshops_df04npg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOGYzYzcyNDgtZGQ2NC00ZTgzLWE2NjktNGQyOTI1Mjc1NTZjXC9kZjA0bnBnLWFiZDE3MWQ0LTUwZDAtNDQwZS1iNTk5LTZhOWNlMGI4ZDcxNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5BuT7OX9li5xpJm_cEjGQnMkFkZU2FHl-bdK2neuFsE"
                            />
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                            </div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base" href="" target="_blank" rel="noreferrer noopener">
                                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                        </span>
                                        <span>nileshshrs.com
                                            <span className="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                                    </path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    A resume-themed personal portfolio website built with Next.js and Tailwind CSS.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            React
                                        </div>
                                    </li><li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            NextJS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            Tailwind CSS
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                                            JavaScript (ES6+)
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                alt=""
                                loading="lazy"
                                width="200"
                                height="48"
                                decoding="async"
                                data-nimg="1"
                                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f3c7248-dd64-4e83-a669-4d292527556c/df04npg-abd171d4-50d0-440e-b599-6a9ce0b8d717.png/v1/fill/w_1192,h_670,q_70,strp/random_anime_girl_with_guns_vaporwave_wallpaper_by_jdsphotoshops_df04npg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOGYzYzcyNDgtZGQ2NC00ZTgzLWE2NjktNGQyOTI1Mjc1NTZjXC9kZjA0bnBnLWFiZDE3MWQ0LTUwZDAtNDQwZS1iNTk5LTZhOWNlMGI4ZDcxNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5BuT7OX9li5xpJm_cEjGQnMkFkZU2FHl-bdK2neuFsE"
                            />
                        </div>
                    </li>
                </ul>
                <div className="mt-12">
                    <a className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                        href="https://github.com/nileshshrs?tab=repositories"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span>
                            <span className="border-b border-transparent pb-px transition group-hover:border-purple-300 motion-reduce:transition-none">
                                View Full Project
                            </span>
                            <span className="whitespace-nowrap">
                                <span className="border-b border-transparent pb-px transition group-hover:border-purple-300 motion-reduce:transition-none">
                                    &nbsp;Archive
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project
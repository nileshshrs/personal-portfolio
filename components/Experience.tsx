import Link from "next/link";
import type { ExperienceItem } from "@/components/interfaces/experience";

const experienceData: ExperienceItem[] = [
    {
        id: 'ekbana',
        startDate: 'Nov 2025',
        endDate: 'Present',
        title: 'Frontend Engineer',
        company: 'EKbana (E.K. Solutions Pvt. Ltd.), Kathmandu, Nepal',
        link: 'https://www.ekbana.com/',
        description: 'Developing scalable web applications using React.js and Next.js. Specialized in component architecture, state management, API integration, and creating pixel-perfect implementations from Figma designs. Focusing on code quality, performance optimization, and delivering user-centered digital experiences.',
        tags: [
            { label: 'React.js & Next.js' },
            { label: 'TypeScript' },
            { label: 'HTML & CSS' },
            { label: 'Bootstrap & Tailwind' },
            { label: 'JavaScript (ES6+)' },
            { label: 'React Hook Form' },
            { label: 'API Integration' },
            { label: 'Zod' },
        ],
        subItems: [
            {
                startDate: 'Aug',
                endDate: 'Nov 2022',
                title: 'Frontend Intern',
                description: 'Building foundational expertise in HTML, CSS, and JavaScript with emphasis on interface design and form validation. Utilized SCSS for maintainable CSS and Bootstrap/Tailwind for responsive designs. Developed expertise in React.js component architecture, state management, and axios integration. Applied API integration to build dynamic, real-time applications using provided APIs and Figma designs.'
            }
        ]
    },
    {
        id: 'fusemachines',
        startDate: 'May',
        endDate: 'Nov 2025',
        title: 'AI Intern – AI Fellowship Program',
        company: 'Fusemachines Inc., Kathmandu, Nepal',
        link: 'https://fusemachines.com/',
        description: 'Participated in a 6-month fellowship on data handling and ML using Python (Pandas, NumPy) and SQL. Worked on data organization, transformation, and validation; designed scalable workflows for processing. Completed weekly assignments on data wrangling, visualization, and regression to extract insights. Gained hands-on experience structuring and integrating data, improving understanding of backend logic and data-driven systems.',
        tags: [
            { label: 'Python' },
            { label: 'Pandas & NumPy' },
            { label: 'SQL' },
            { label: 'Data Wrangling' },
            { label: 'Data Visualization' },
            { label: 'Machine Learning' },
            { label: 'Regression' },
        ],
    },
    {
        id: 'education',
        startDate: '2022',
        endDate: '2025',
        title: '(Hons.) Computing Undergraduate',
        company: 'Coventry University',
        link: 'https://softwarica.edu.np/',
        description: 'An undergraduate at Coventry University actively developing accessible, user-centered applications. I work with technologies such as React, TypeScript, Java, Python, Next.js, and Spring Boot, while also exploring machine learning to enhance digital interactions.',
        tags: [
            { label: 'JavaScript (ES6+)' },
            { label: 'TypeScript' },
            { label: 'React.js & Next.js' },
            { label: 'Java' },
            { label: 'Python' },
            { label: 'Spring Boot' },
            { label: 'Machine Learning & Computer Vision' },
            { label: 'Node.js' },
        ],
    },

    {
        id: 'antarang',
        startDate: 'Sept',
        endDate: 'Aug 2022',
        title: 'Administrative Clerk',
        company: 'Antarang Psychosocial Research & Training Institute',
        link: 'https://antarang.com.np/',
        description: 'Efficiently managed diverse administrative tasks: data entry, meeting minute generation, and file organization. Maintained optimal office supplies inventory through effective supplier communication. Also provided exceptional customer service via email and phone interactions.',
        tags: [
            { label: 'Time Management' },
            { label: 'Office Software' },
            { label: 'Communication Skills & Customer Service Orientation' },
            { label: 'Attention to Detail & Multitasking' },
        ],
    },
]

const Experience = () => {
    return (
        <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <ol className='group/list'>
                {experienceData.map((experience) => (
                    <li key={experience.id} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:hover:opacity-100!">
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 sm:col-span-2" >
                                {experience.startDate} — {experience.endDate}
                            </header>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    <div>
                                        <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300 group/link text-base" href={experience.link} target="_blank" rel="noreferrer noopener" >
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>{experience.title} &nbsp; · &nbsp;
                                                <span className="inline-block">{experience.company}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </h3>
                                <p className="mt-2 text-sm leading-normal font-normal">
                                    {experience.description}
                                </p>
                                {experience.subItems && experience.subItems.length > 0 && (
                                    <div className="mt-4 ml-4 border-l border-slate-700 pl-4">
                                        {experience.subItems.map((subItem) => (
                                            <div key={`${subItem.title}-${subItem.startDate}`} className="mb-4">
                                                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                                    {subItem.startDate} — {subItem.endDate}
                                                </div>
                                                <h4 className="mt-1 font-medium text-slate-200 text-xs">
                                                    {subItem.title}
                                                </h4>
                                                <p className="mt-1.5 text-xs leading-normal font-normal text-slate-400">
                                                    {subItem.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    {experience.tags.map((tag) => (
                                        <li key={tag.label} className="mr-1.5 mt-2">
                                            <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300">
                                                {tag.label}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
            <div className="mt-12">
                <Link
                    className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300 group/link text-base"
                    href="https://drive.google.com/file/d/1KZ2k_x8SdiLBYHcQz8fwfpl61iH_2aYn/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span>View Full&nbsp;<span className="inline-block">Résumé<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                        </path>
                    </svg>
                    </span>
                    </span>
                </Link>
            </div>
        </section>
    )
}

export default Experience

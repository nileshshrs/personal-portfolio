'use client'

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import type { ProjectItem } from "@/components/interfaces/project";
import { useImageModal } from "@/hooks/useImageModal";

export default function Project() {
  const { isOpen, selectedImage, openModal, closeModal } = useImageModal();
  const siteOrigin = "https://nileshshrs.com";

  const projectData: ProjectItem[] = [
    {
      id: "tetris-ai",
      title: "Tetris AI with Genetic Algorithm",
      description:
        "An AI system for Tetris using heuristic evaluation and a Genetic Algorithm (GA), designed to enhance gameplay strategies and support real-time decision-making. The AI evaluates tetromino placements using a weighted cost function and evolves over generations through mutation, crossover, and selection. Provides insight into agent behavior in a constrained game environment with adaptive learning capabilities.",
      link: "https://github.com/nileshshrs/Tetris-Project",
      image: "/images/5_HD.webp",
      tags: [
        { label: "Genetic Algorithm" },
        { label: "AI & Machine Learning" },
        { label: "Python" },
        { label: "Heuristic Evaluation" },
      ],
    },
    {
      id: "rhythm",
      title: "Rhythm Music Player Application",
      description:
        "A web-based music player application offering song and album search with intuitive playback controls. This app features playlist creation and management, album-based playlist generation, and customizable theme colors. Designed with a clean, interactive interface for seamless music browsing and listening, it allows users to organize their music collection with ease while enjoying a smooth, engaging experience.",
      link: "https://github.com/nileshshrs/Rythm-Music-Player-Application",
      image: "/images/4_HD.webp",
      tags: [
        { label: "TypeScript" },
        { label: "React" },
        { label: "JavaScript (ES6+)" },
        { label: "Full Stack" },
      ],
    },
    {
      id: "weixin",
      title: "WeChat Themed Chat Application",
      description:
        "A simplified chat application built with Flutter and Dart, inspired by WeChat by Tencent. This app features basic messaging capabilities, user authentication, and data storage powered by Firebase. Designed with a focus on ease of use, it allows users to engage in seamless and extended conversations.",
      link: "https://github.com/nileshshrs/simple-weixin-with-firebase",
      image: "/images/2_HD.webp",
      tags: [{ label: "Flutter & Dart" }],
    },
    {
      id: "clothing-store",
      title: "Online Clothing Store",
      description:
        "A responsive online clothing store using Spring Boot, PostgreSQL, and React, highlighting full-stack expertise. Involves end-to-end management, focusing on UI/UX and security with JWT authentication. GitHub source code demonstrates skills in React, relational databases, and Spring Boot.",
      link: "https://github.com/nileshshrs/clothing-store",
      image: "/images/1_HD.webp",
      tags: [
        { label: "React" },
        { label: "Spring Boot" },
        { label: "Tailwind" },
        { label: "CSS & SCSS" },
        { label: "JavaScript (ES6+)" },
      ],
    },
    {
      id: "portfolio",
      title: "nileshshrs.com",
      description:
        "A résumé-themed personal portfolio website built with Next.js and Tailwind CSS.",
      link: siteOrigin,
      image: "/images/3_HD.webp",
      tags: [
        { label: "React" },
        { label: "Next.js" },
        { label: "Tailwind CSS" },
        { label: "JavaScript (ES6+)" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Project
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projectData.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-300 focus-visible:text-purple-300  group/link text-base"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>
                        {project.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap">
                    {project.tags.map((tag) => (
                      <li key={tag.label} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium leading-5 text-purple-300 ">
                          {tag.label}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  alt={project.title}
                  loading="lazy"
                  width="200"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 cursor-pointer"
                  src={project.image}
                  onClick={() => openModal(project.image)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Button
            render={
              <Link
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            }
            nativeButton={false}
            className="inline-flex items-center font-semibold leading-tight text-slate-200 group border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0"
          />
        </div>
      </div>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            closeModal();
          }
        }}
      >
        <DialogContent className="border-slate-700 bg-slate-900 p-3">
          {selectedImage && (
            <div className="flex h-full w-full items-center justify-center">
              <Image
                alt="Project preview"
                width="800"
                height="600"
                src={selectedImage}
                className="max-h-full w-auto max-w-full rounded-lg object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

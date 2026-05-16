import Link from "next/link";
import type { Paragraph } from "@/components/interfaces/about";

const aboutContent: Paragraph[] = [
  {
    id: "intro",
    content: (
      <>
        I&apos;m Nilesh Shrestha, a frontend engineer who believes in
        user-centered digital experiences. What started as curiosity around
        conversational technology and development in late 2020 was inspired by
        a{" "}
        <Link
          href="https://www.cleverbot.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-slate-200 hover:text-purple-300 focus-visible:text-purple-300"
        >
          Cleverbot
        </Link>{" "}
        integrated Discord bot for conversations. Now, I do my best work at the
        intersection of design and engineering.
      </>
    ),
  },
  {
    id: "skills",
    content:
      "Currently, I work with React and Next.js to build modern web applications, focusing on reusable components and clean frontend structure to help create intuitive interfaces. I also have experience working with APIs, backend services, and databases, alongside knowledge of Java, Python, Spring Boot, Express, and related backend frameworks.",
  },
  {
    id: "interests",
    content:
      "Recently, I've been exploring machine learning and computer vision with an interest in interactive systems and emerging technologies. Outside of development, I enjoy gaming and occasionally reading about history and science-related topics.",
  },
];

const About = () => {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      {aboutContent.map((paragraph) => (
        <p key={paragraph.id} className="mb-4">
          {paragraph.content}
        </p>
      ))}
    </section>
  );
};

export default About;

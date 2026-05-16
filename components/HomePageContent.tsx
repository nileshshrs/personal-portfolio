"use client"

import About from "@/components/Home/About"
import Experience from "@/components/Home/Experience"
import Footer from "@/components/Home/Footer"
import Introduction from "@/components/Home/Introduction"
import Project from "@/components/Home/Project"



export default function HomePageContent() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Introduction />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Project />
          <Footer />
        </main>
      </div>
    </div>
  )
}

import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Image from "next/image";

export default function Home() {
  return (

    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between gap-4">
        <Introduction />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />

        </main>
      </div>
    </div>

  );
}

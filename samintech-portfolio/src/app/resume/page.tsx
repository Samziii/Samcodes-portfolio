
"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-dvh bg-[#0a0a0a] flex flex-col items-center py-12 px-4">
      <section className="w-full max-w-4xl bg-[#151515] rounded-lg border border-gray-600 shadow-xl p-6 flex flex-col gap-6">
        <div className="relative flex items-center justify-center border-b border-gray-800 pb-4">
          <h1 className="text-2xl font-bold text-gray-100 text-center">
            Resume
          </h1>

          <Link
            href="/resume.pdf"
            download
            title="Download PDF"
            aria-label="Download PDF"
            className="absolute right-0 p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 rounded-full shadow-md transition-all duration-200 hover:scale-105"
          >
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>

        <div className="w-full flex justify-center">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="w-full h-[80vh] min-h-[600px] rounded-md shadow-lg border-0 bg-white"
          />
        </div>
      </section>
    </main>
  );
}

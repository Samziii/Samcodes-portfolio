/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border" />
    );
  }

  const shouldInvert =
    src.includes("stellar.png") ||
    src.includes("midnight.png") ||
    src.includes("builderbase.png") ||
    src.includes("solidworks.png") ||
    src.includes("freelance.svg");

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "size-8 md:size-10 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-border",
        shouldInvert && "invert dark:invert-0"
      )}
      loading="lazy"
      decoding="async"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="grid w-full gap-2 border-b-0"
        >
          <AccordionTrigger className="group cursor-pointer rounded-none p-0 transition-colors hover:no-underline [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-3 text-left">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <LogoImage src={work.logoUrl} alt={work.company} />

                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <h3 className="flex items-center gap-2 font-semibold leading-none">
                    {work.company}

                    <span className="relative inline-flex size-3.5 items-center">
                      <ChevronRight
                        className={cn(
                          "absolute size-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0"
                        )}
                      />

                      <ChevronDown
                        className={cn(
                          "absolute size-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "rotate-0 opacity-0",
                          "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100"
                        )}
                      />
                    </span>
                  </h3>

                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>

              <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                <span>{work.start} - {work.end}</span>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="ml-13 p-0 text-xs text-muted-foreground sm:text-sm">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

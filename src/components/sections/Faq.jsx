"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  function toggle(index) {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-[720px] px-6">
        <h2 className="mb-10 text-center text-4xl text-purple md:text-5xl text-balance">
          Perguntas Frequentes
        </h2>

        <div>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between py-5 text-left font-semibold text-gray-800 transition-colors hover:text-purple"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span
                    className={cn(
                      "ml-4 text-xs text-gray-600 transition-transform duration-200",
                      isOpen && "rotate-180 text-purple"
                    )}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-200",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 leading-relaxed text-gray-600 text-pretty">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

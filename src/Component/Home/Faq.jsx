import React, { useState } from "react";
import { HeadingH2, Para } from "../Typography/Typography";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a React Website?",
      answer:
        "Built with React.js, these sites are fast, interactive, and scalable, offering a modern, future‑proof online presence.",
    },
    {
      question: "Why is Responsive Design Important?",
      answer:
        "Your site looks and works perfectly on any device (mobile, tablet, desktop), improving user experience, reach, and SEO.",
    },
    {
      question: "How do you improve website speed?",
      answer:
        'My "Performance Optimization" skills make your site lightning‑fast through efficient code and asset loading, improving user satisfaction and search rankings.',
    },
    {
      question: "What's your project development process?",
      answer:
        "I focus on user‑centered design, clean code (React, Next.js, Tailwind CSS), and open communication for a high‑quality, functional website.",
    },
    {
      question: "How does your work support business growth?",
      answer:
        "I build scalable websites with clean architectures that easily adapt to increased traffic and new features as your business expands.",
    },
    {
      question: "What is a User‑Centered Interface?",
      answer:
        "I design intuitive, engaging interfaces that are easy to navigate, ensuring a positive user experience and better engagement.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div id="faq" className="py-10 scroll-mt-24">

      <div className="py-2">
        <HeadingH2 headingH2="FAQ" />
      </div>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="gradient-box shadow-white-3 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 ">
              <button
                onClick={() => toggle(index)}
                className="py-3 cursor-pointer text-base text-left flex-1"
              >
                {faq.question}
              </button>
              <span
                className={`px-4 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            <div
              className={`overflow-hidden  duration-300 ${
                openIndex === index ? "max-h-40 py-3" : "max-h-0"
              } px-4 bg-slate-300`}
            >
              <Para para={faq.answer} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

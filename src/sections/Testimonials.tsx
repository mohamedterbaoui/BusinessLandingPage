"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

import { motion } from "framer-motion";

import Image from "next/image";

const testimonials = [
  {
    text: "“This service has completely revolutionized how I manage my campaigns and achieve marketing milestones.”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These advanced advertising tools have transformed our entire marketing strategy overnight.”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is incredibly intuitive, streamlining our campaigns and saving us countless hours of work.”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started partenering with TRNDZY”",
    name: "Alec Whitten",
    title: "CFO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Beyond Expectations
        </h2>
        <p className="text-lg md:text-xl text-white/70 text-center tracking-tight mt-5 max-w-sm mx-auto">
          Our cutting-edge advertising strategies have transformed our clients'
          brand visibility and market reach.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex-none max-w-xs md:max-w-md p-6 md:p-10 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] rounded-xl border border-white/15 flex-col justify-start items-start inline-flex"
              >
                <h3 className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </h3>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt="avatar"
                      className="h-11 w-11 rounded-lg grayscale "
                    />
                  </div>
                  <div className="">
                    <h4 className="">{testimonial.name}</h4>
                    <h5 className="text-white/50 text-sm">
                      {testimonial.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";

import { Trainer } from "./trainer";
import Courses from "../courses/courses";

export function About() {
  return (
    <>
      <div className="about bg-gray-100 flex items-center justify-center p-6">
        <div>
          <div>
            <h1 className="text-white  font-bold text-5xl pr-8 whitespace-normal">
              Home ---- About Us
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap  ">
        <img
          height={530}
          src="https://www.vhv.rs/file/max/3/35192_fitness-man-png.png"
        />

        <div className="pl-[40px]">
          <h1>
            Our <span className="text-primary">Mission</span>{" "}
          </h1>
          <p className="box-border w-[520px] text-gray-400 leading-10 max-md:w-[250px]">
            Our mission is to empower individuals from all walks of life to lead
            healthier, more active lifestyles. We are committed to providing a
            welcoming and supportive environment where our members can achieve
            their fitness goals, foster a sense of community, and embrace
            lifelong wellness.Our vision is to be the premier destination for
            fitness enthusiasts, beginners, and everyone in between. We aim to
            be recognized for our excellence in fitness education,
            state-of-the-art facilities, and a diverse range of programs and
            classes. We aspire to inspire lasting change and help our members
            realize their full potential, both inside and outside the gym.
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.1 }}
      >
        <div className="min-h-[50vh]">
          <Trainer />
        </div>
      </motion.div>
    </>
  );
}

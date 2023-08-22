import { motion } from "framer-motion";

import { Trainer } from "./trainer";
import Courses from "../courses/courses";

export function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.1 }}
      >
        <div className="min-h-[50vh]">
          <Trainer />
        </div>
        <Courses />
      </motion.div>
    </>
  );
}

import { motion } from "framer-motion";
import { CourseData } from "./coursesData";

function Courses() {
  return (
    <>
      <div className="about bg-gray-100 flex items-center justify-center p-6">
        <div>
          <div>
            <h1 className="text-white  font-bold text-5xl whitespace-normal">
              Home ---- Courses
            </h1>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.1 }}
      >
        <h1 className="text-center">Our Courses</h1>
        <div className="flex justify-evenly flex-wrap text-center text-primary">
          {CourseData.map((data, index: number) => (
            <div key={index}>
              <img src={data.image} height={400} />
              <h3>{data?.type}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
export default Courses;

import { ArrowForward } from "@mui/icons-material";

import Testimonial from "../../components/testimonials/testimonials";

export function Home() {
  return (
    <>
      <div className="home bg-gray-100 flex items-center justify-center p-6">
        <div>
          <div>
            <h1 className="text-white  font-bold text-5xl whitespace-normal">
              Shape Your Perfect Body
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
          <h3 className="text-primary ">Information about us</h3>
          <h2>
            DAZKO A CROSSFIT <span className="text-primary">WORKOUT</span>{" "}
            TRAINING CENTER
          </h2>
          <p className="box-border w-[520px] text-gray-400 leading-7 max-md:w-[250px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            expedita ipsa nisi accusantium odio, dignissimos quis fugit
            praesentium, sequi nemo natus corporis asperiores non earum ut
            cupiditate. Beatae, impedit aliquid.
          </p>
          <ul className="p-0">
            <li className="list-none uppercase mb-4 text-sm">
              <ArrowForward className="align-middle" /> MEN Fitness and training
            </li>
            <li className="list-none uppercase mb-4 text-sm">
              <ArrowForward className="align-middle" /> Women Fitness and
              training
            </li>
            <li className="list-none uppercase mb-4 text-sm">
              <ArrowForward className="align-middle" /> Personal training
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-1 pt-10 bg-primary text-white ">
        <span className="text-center max-md:border-b border-white p-4">
          <h1 className="text-3xl md:text-4xl">100+</h1>
          <p className="text-lg md:text-xl">Equipments</p>
        </span>

        <span className="text-center max-md:border-b border-white p-4">
          <h1 className="text-3xl md:text-4xl">5+</h1>
          <p className="text-lg md:text-xl">Years of Experience</p>
        </span>

        <span className="text-center max-md:border-b border-white p-4">
          <h1 className="text-3xl md:text-4xl">10+</h1>
          <p className="text-lg md:text-xl">Fitness Trainer</p>
        </span>

        <span className="text-center p-4">
          <h1 className="text-3xl md:text-4xl">1k+</h1>
          <p className="text-lg md:text-xl">Satisfied Clients</p>
        </span>
      </div>
      <div>
        <h1 className="text-center">Testimonials</h1>
        <p className="text-center mt-10">
          See What Our <span className="text-primary">Client</span> Says
        </p>
        <Testimonial />
      </div>
    </>
  );
}

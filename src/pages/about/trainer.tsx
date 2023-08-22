import { TrainerDetails } from "./trainerData";

export function Trainer() {
  return (
    <>
      <h1 className="text-center">
        Our <span className="text-primary"> Trainer</span>
      </h1>
      <div className="flex items-center justify-evenly flex-wrap bg-blue-300 sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-purple-300">
        {TrainerDetails.map((data, index: number) => (
          <div key={index} className="flex flex-col text-center">
            <img height={400} src={data.image} />
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

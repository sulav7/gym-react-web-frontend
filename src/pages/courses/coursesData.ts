export interface ICourse {
  id: number;
  image: string;
  type: string;
}

export const CourseData: ICourse[] = [
  {
    id: 1,
    image:
      "https://www.seekpng.com/png/detail/32-327670_about1-gym-workout-imges-png.png",
    type: "Body Building",
  },
  {
    id: 2,
    image: "https://preview.colorlib.com/theme/dazko/images/classes-2.jpg.webp",
    type: "Weight Lifting",
  },
  {
    id: 3,
    image: "https://preview.colorlib.com/theme/dazko/images/classes-3.jpg.webp",
    type: "Cardio",
  },
  {
    id: 4,
    image: "https://preview.colorlib.com/theme/dazko/images/classes-5.jpg.webp",
    type: "Yoga",
  },
  {
    id: 5,
    image: "https://preview.colorlib.com/theme/dazko/images/classes-1.jpg.webp",
    type: "Body Building",
  },
];

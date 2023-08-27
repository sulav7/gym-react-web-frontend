import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TestimonialData } from "./testimonialData";
import { FormatQuote } from "@mui/icons-material";

const Testimonial = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh] flex-wrap ">
        {TestimonialData.map((testimonial) => (
          <div key={testimonial.id}>
            <p className="w-[400px] text-gray-600 leading-7 max-md:w-[250px] mr-[50px]">
              <FormatQuote sx={{ fontSize: 80 }} className="text-primary" />
              {testimonial.text}
              <FormatQuote className="text-primary" />
            </p>
            <h2 className="text-secondary">{testimonial.author}</h2>
            <img
              src={testimonial.image}
              className="w-[80px] h-[80px] rounded-[50%] mr-[50px]"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonial;

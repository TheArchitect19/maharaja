import "./Carousel.css";
import { useState } from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Link from "next/link";


export const Carousel = ({data})=> {
  
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel ">
      <Slider {...settings}>
        {data.map((img, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Link href={`/product/#${img.model.category.category}`} passhref>
              <div style={{boxShadow: "1px 1px 10px 2px #484848"}} >
              <img src={img.model.model_image_with_background} alt={"Image"} className="scale:110" />
              </div>
              <p className="text-center text-[0.60rem] uppercase tracking-widest font-semibold mt-3 md:text-base md:mt-6 lg:mt-8 ">{img.model.category.category}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
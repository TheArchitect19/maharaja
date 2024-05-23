"use client";



import "./ModalCarousel.css";
import { useState } from "react";
import Slider from "react-slick";
// import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const PrevArrow = ({ onClick }) => {
  return (
    <div className="modalArrow modalprev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="modalArrow modalnext" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

export const ModalCarousel = ({data, showMeasureMent})=> {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };
  
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      {
        !showMeasureMent ? 
        <Slider {...settings}>
            <div>
                <img
                  style={{maxHeight: "50vh"}}
                  src={data[0]}
                  alt={"random image"}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                />
            </div>
            <div>
                <img
                  style={{maxHeight: "50vh"}}
                  src={data[2]}
                  alt={"random image"}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                />
            </div>
            <div>
                <img
                  style={{maxHeight: "50vh"}}
                  src={data[3]}
                  alt={"random image"}
                  onContextMenu={handleContextMenu}
                  onDragStart={handleDragStart}
                />
            </div>
        </Slider>
          :
        <Slider {...settings} >
          <div>
            <img
              style={{maxHeight: "50vh"}}
              src={data[1]}
              alt={"random image"}
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
            />
          </div>
        </Slider>
        }
    </div>
  );
}

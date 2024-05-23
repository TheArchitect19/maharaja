"use client";
import "./ModalCarousel.css";
import "./GalleryCarousel.css";
import { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/link";
import NoImageFound from "../assets/noImage.jpg";
import { selectClasses } from "@mui/material";


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

export const GalleryCarousel = ({ selectedImage, category })=> {
  
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };
  
  const [imageIndex, setImageIndex] = useState(0);
  const totalImages = selectedImage?.gallery_images?.length || 0;


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
      
      {selectedImage?.gallery_images?.length !== 0 ?
      
          <Slider {...settings}>
          {
          
            selectedImage?.gallery_images?.map((image, id) => (
              <div key={id}>
                <Link href={`/product/#${category}`} passHref className="modalLink">
                  
                  <img
                    className="modalImg"
                    src={image.image}
                    alt="image"
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                  />
                </Link>
              </div>
          )) 
          }
          
           </Slider>
          : 
            <div className="w-full flex-col flex justify-center items-center">
              <Image src={NoImageFound} maxHeight="60vh" alt="noimage" />
              <h2 className=" text-md md:text-xl text-center font-semibold text-gray-700 uppercase">No Gallery for this product</h2>
            </div>
        }
    </div>
  );
}


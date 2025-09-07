import React from "react";
import Slider from "react-slick";

import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 👇 Custom arrow components
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", fontSize: "30px" }}
      onClick={onClick}
    />
  );
};

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          arrows: true, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Slide 1"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Slide 2"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Slide 3"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Slide 4"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home;

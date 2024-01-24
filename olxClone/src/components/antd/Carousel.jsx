import React from "react";
import { Carousel } from "antd";
import CAROUSEL1 from "../../assets/carousel1.jpeg";
import CAROUSEL2 from "../../assets/carousel2.jpeg";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
};
const AppCarousel = () => (
  <Carousel className="mt-3 container" autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className="img" src={CAROUSEL1} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img className="img" src={CAROUSEL2} alt="" />
      </h3>
    </div>
  </Carousel>
);
export default AppCarousel;

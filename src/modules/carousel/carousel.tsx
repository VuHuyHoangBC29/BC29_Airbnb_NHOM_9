import { Carousel as HomeCarousel, Image } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Carousel(): JSX.Element {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div id="HomeCarousel">
      <HomeCarousel afterChange={onChange}>
        <div>
          <img
            src="https://images.wallpaperscraft.com/image/single/tropical_resort_vacation_90877_2560x1024.jpg"
            alt=""
            style={{ width: "100%", height: "70vh" }}
          />
          {/* <img
            src={require("./vacation_1.jpg")}
            alt=""
            style={{ width: "100%", height: "70vh" }}
          /> */}
        </div>
      </HomeCarousel>
    </div>
  );
}

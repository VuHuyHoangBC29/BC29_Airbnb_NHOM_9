import { Carousel as HomeCarousel, Image } from "antd";
import React from "react";

export default function Carousel(): JSX.Element {
  return (
    <div id="HomeCarousel">
      <HomeCarousel>
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

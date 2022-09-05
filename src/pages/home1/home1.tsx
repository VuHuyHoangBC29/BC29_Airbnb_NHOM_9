import React from "react";
import Carousel from "../../modules/carousel/carousel";
import NearbyPlace from "../../modules/nearby-place/nearby-place";

export default function Home1(): JSX.Element {
  return (
    <div>
      <div>home1</div>
      <Carousel />
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
          Nhờ có Host, mọi điều đều có thể
        </p>
      </div>
      <NearbyPlace />
    </div>
  );
}

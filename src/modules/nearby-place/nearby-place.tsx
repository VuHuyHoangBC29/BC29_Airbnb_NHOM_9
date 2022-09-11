import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationsListAction } from "../../store/reducers/locationReducer";
import { AppDispatch, RootState } from "../../store/store";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";

import "./nearby-place.scss";

export default function NearbyPlace() {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLocationsListAction());
  }, []);

  const { locationsList } = useSelector(
    (state: RootState) => state.locationReducer
  );

  // console.log(locationsList);

  const renderLocations = () => {
    return locationsList?.map((ele, idx) => {
      return (
        <Fragment key={idx}>
          <div className="d-flex justify-content-left align-items-center mb-3 mr-3">
            <img
              style={{ width: "100px", height: "100px" }}
              className="img-fluid rounded"
              src={ele.image}
              alt=""
            />
            <p style={{ fontWeight: "bolder" }} className="mb-0 ml-2">
              {ele.province}
            </p>
          </div>
        </Fragment>
      );
    });
  };

  return (
    <div id="nearbyPlaces" className="mb-5">
      <h2 className="mb-3">Khám phá những địa điểm gần đây</h2>
      <Carousel
        className="px-5"
        slidesToShow={5}
        slidesPerRow={2}
        arrows
        prevArrow={<LeftCircleOutlined />}
        nextArrow={<RightCircleOutlined />}
      >
        {renderLocations()}
      </Carousel>
    </div>
  );
}

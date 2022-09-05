import { Layout } from "antd";
import { Col, Divider, Row } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const { Footer } = Layout;

const style: React.CSSProperties = {
  background: "transparent",
  padding: "8px 0",
};

export default function PageFooter() {
  return (
    <div id="pageFooter">
      <Footer style={{ textAlign: "center" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div>
              <ul
                style={{
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "0",
                }}
              >
                <h5 style={{ marginBottom: "15px" }}>GIỚI THIỆU</h5>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Phương thức hoạt động của AirBnB
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Trang tin tức
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Nhà đầu tư
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Airbnb plus
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Airbnb luxe
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    HotelTonight
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Airbnb for Work
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Nhờ có host, mọi điều đều có thể
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Cơ hội nghề nghiệp
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Thư của nhà sáng lập
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <ul
                style={{
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "0",
                }}
              >
                <h5 style={{ marginBottom: "15px" }}>CỘNG ĐỒNG</h5>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Sự đa dạng và cảm giác thân thuộc
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Tiện nghi phù hợp cho người khuyết tật
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Đối tác liên kết Airbnb
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Chỗ ở cho tuyến đầu
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Lượt giới thiệu của khách
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Airbnb.org
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <ul
                style={{
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "0",
                }}
              >
                <h5 style={{ marginBottom: "15px" }}>ĐÓN TIẾP KHÁCH</h5>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Cho thuê nhà
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Tổ chức trải nghiệm trực tuyến
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Tổ chức trải nghiệm
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Đón tiếp khách có trách nhiệm
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Trung tâm tài nguyên
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Trung tâm cộng đồng
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <ul
                style={{
                  textAlign: "left",
                  listStyleType: "none",
                  padding: "0",
                }}
              >
                <h5 style={{ marginBottom: "15px" }}>HỖ TRỢ</h5>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Trung tâm trợ giúp
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Các tùy chọn hủy
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Hỗ trợ khu dân cư
                  </NavLink>
                </li>
                <li style={{ marginBottom: "10px" }}>
                  <NavLink
                    style={{ color: "black", textDecoration: "none" }}
                    to="/"
                  >
                    Tin cậy và an toàn
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div style={{ textAlign: "left" }}>
              <ul
                style={{ padding: "0" }}
                className="list-group list-group-horizontal"
              >
                <li style={{ listStyleType: "none", marginRight: "25px" }}>
                  @2021 Airbnb, Inc. All rights reserved
                </li>
                <li style={{ marginRight: "25px" }}>Quyền riêng tư</li>
                <li style={{ marginRight: "25px" }}>Điều khoản</li>
                <li style={{ marginRight: "25px" }}>Sơ đồ trang web</li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <ul
                style={{
                  listStyleType: "none",
                  justifyContent: "right",
                }}
                className="list-group list-group-horizontal"
              >
                <li
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  <NavLink style={{ color: "black" }} to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </NavLink>
                </li>
                <li style={{ marginLeft: "15px", marginRight: "15px" }}>
                  <NavLink style={{ color: "black" }} to="/">
                    <i className="fa-brands fa-twitter"></i>
                  </NavLink>
                </li>
                <li style={{ marginLeft: "15px", marginRight: "15px" }}>
                  <NavLink style={{ color: "black" }} to="/">
                    <i className="fa-brands fa-instagram"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

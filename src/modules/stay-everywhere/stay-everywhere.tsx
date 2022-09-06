import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";

export default function StayEverywhere() {
  const style: React.CSSProperties = {
    background: "#0092ff",
    padding: "8px 0",
  };

  const { Meta } = Card;

  return (
    <div id="stayEverywhere" className="mb-5">
      <h2>Ở bất cứ đâu</h2>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 350 }}
                cover={
                  <img
                    className="img-fluid"
                    alt="example"
                    src={require("./bigstock-Small-Family-House-With-Curved-317475139.jpg")}
                  />
                }
              >
                <Meta title="Toàn bộ nhà" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 350 }}
                cover={
                  <img
                    className="img-fluid"
                    alt="example"
                    src={require("./10-airship-002-min.jpg")}
                  />
                }
              >
                <Meta title="Chỗ ở độc đáo" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 350 }}
                cover={
                  <img
                    className="img-fluid"
                    alt="example"
                    src={require("./apple-orchard-farm-stay-blackheath-nsw-airbnb.jpg")}
                  />
                }
              >
                <Meta title="Trang trại và thiên nhiên" />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Card
                hoverable
                style={{ width: 350 }}
                cover={
                  <img
                    className="img-fluid"
                    alt="example"
                    src={require("./keeping-birds-at-home-according-to-vastu.jpg")}
                  />
                }
              >
                <Meta title="Cho phép mang theo thú cưng" />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

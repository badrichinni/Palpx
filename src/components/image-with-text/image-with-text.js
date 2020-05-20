import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./image-with-text.css";
class ImageWithText extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="image-row">
          <Col sm={12} lg={4}>
            <Row className="image">
              <Col lg={4} sm={4} xs={4}>
                <img
                  src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                  alt="react logo"
                />
              </Col>
              <Col lg={8} sm={8} xs={8}>
                <h6>Heading</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <Button variant="secondary">Secondary</Button>
          </Col>
          <Col sm={12} lg={4}>
            <Row className="image">
            <Col lg={4} sm={4} xs={4}>
                <img
                  src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                  alt="react logo"
                />
              </Col>
              <Col lg={8} sm={8} xs={8}>
                <h6>Heading</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <Button variant="secondary">Secondary</Button>
          </Col><Col sm={12} lg={4}>
            <Row className="image">
            <Col lg={4} sm={4} xs={4}>
                <img
                  src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                  alt="react logo"
                />
              </Col>
              <Col lg={8} sm={8} xs={8}>
                <h6>Heading</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <Button variant="secondary">Secondary</Button>
          </Col>
        </Row>
        <Row className="image-row">
          <Col sm={12} lg={4}>
            <Row className="image">
            <Col lg={4} sm={4} xs={4}>
                <img
                  src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png"
                  alt="react logo"
                />
              </Col>
              <Col lg={8} sm={8} xs={8}>
                <h6>Heading</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <Button variant="secondary">Secondary</Button>
          </Col>
          <Col sm={12} lg={4}>
            <Row className="image">          
              <Col lg={12} >
                <h6>Heading</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <Button variant="secondary">Secondary</Button>
          </Col><Col sm={12} lg={4}>
            <Row className="image">            
              <Col lg={12}>
                <h6>Heading</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </Col>
            </Row>
            <Button variant="secondary">Secondary</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ImageWithText;

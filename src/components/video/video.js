import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./video.css";
class Video extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="video-row">
          <Col sm={12} lg={4}>
            <iframe
              title="react video"
              width="100%"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button variant="secondary">Secondary</Button>
          </Col>
          <Col sm={12} lg={4}>
            <iframe
              title="react video"
              width="100%"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button variant="secondary">Secondary</Button>
          </Col>
          <Col sm={12} lg={4}>
            <iframe
              title="react video"
              width="100%"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button variant="secondary">Secondary</Button>
          </Col>
        </Row>
        <Row className="video-row">
          <Col sm={12} lg={4}>
            <iframe
              title="react video"
              width="100%"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button variant="secondary">Secondary</Button>
          </Col>
          <Col sm={12} lg={4}>
            <iframe
              title="react video"
              width="100%"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button variant="secondary">Secondary</Button>
          </Col>
          <Col sm={12} lg={4}>
            <iframe
              title="react video"
              width="100%"
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Button variant="secondary">Secondary</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Video;

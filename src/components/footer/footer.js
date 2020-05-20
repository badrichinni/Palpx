import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col lg={8}>
            <span className="company-name">3M</span>
            <ul className="footer-links">
              <li>Home</li> <li>Careers</li> <li>Contact us</li> <li>Blog</li>
              <li>Home</li> <li>Careers</li> <li>Contact us</li> <li>Blog</li>{" "}
              <li>Home</li> <li>Careers</li> <li>Contact us</li> <li>Blog</li>{" "}
              <li>Home</li> <li>Careers</li> <li>Contact us</li> <li>Blog</li>
            </ul>
          </Col>

          <Col lg={4}>
            <p>&copy; Jan 2020 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Footer;

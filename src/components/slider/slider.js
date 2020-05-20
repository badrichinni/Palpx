import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
class Slider extends Component {
  render() {
    return (
      <div class="slider">
        <Carousel>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Innovation Story Learing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Innovation Story Learing2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Innovation Story Learing3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Slider;

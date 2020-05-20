import React, { Component } from "react";
import Header from "../header/header";
import Slider from "../slider/slider";
import Video from "../video/video";
import ImageWithText from "../image-with-text/image-with-text";
import Footer from "../footer/footer";

 
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Video />
        <ImageWithText />
        <Footer/>
      </div>
    );
  }
}
export default Home;

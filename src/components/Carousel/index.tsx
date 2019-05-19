import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "./img/slider-1.jpg";
import img2 from "./img/slider-2.jpg";
import img3 from "./img/slider-3.jpg";
import img4 from "./img/slider-4.jpg";

import "./index.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
        </Slider>
      </div>
    );
  }
}

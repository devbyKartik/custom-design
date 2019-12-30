import React from 'react';
import "./slider.scss";
import Slider from "react-slick";
import Img from "../img/Img";
import Image from "../../../assets/images/banner.jpg";
import Button from "../buttons/Button";
function BannerSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const buttonInfo = {
        type: 'simple',
        buttonClass: 'banner-slider-image',
        title: '',
    }
    const bannerData = () => {
        return (<Button buttonInfo={buttonInfo} onChangefun={() => { console.log("hello") }}>
            <Img src={Image} imgSrc="local" cssClass="banner-wrapper__single-slide-img" version="" title="" />
        </Button>)
    }
    return (
        <div className="banner-wrapper">
            <Slider {...settings}>
                <div>
                   {bannerData()}
                </div>
                <div>
                   {bannerData()}
                </div>
                <div>
                   {bannerData()}
                </div>
              
            </Slider>
        </div>
    );
}



export default BannerSlider;

import React from 'react';
import "./home.scss";
import BannerSlider from "../../components/shared/slider/BannerSlider";
import Category from "../../components/shared/category/Category";
import Image from "../../assets/images/deal1.jpg";
import Image2 from "../../assets/images/deal2.webp";
import Img from "../../components/shared/img/Img";
import {Link} from "react-router-dom";
function Home() {
 
  return (
    <div className="home-wrapper">
       <div className="home-wrapper__banner-slider">
          <BannerSlider />
          <Category/>
          <div className="home-deals-wrapper">
            <div className="home-deals-wrapper__single">
               <Link to={`/category/123`}>
                 <Img src={Image} imgSrc="local" cssClass="banner-wrapper__single-slide-img" version="" title="" />
              </Link>
            </div>
            <div className="home-deals-wrapper__single">
            <Link to={`/category/123`}>
                 <Img src={Image2} imgSrc="local" cssClass="banner-wrapper__single-slide-img" version="" title="" />
              </Link>
            </div>
          </div>
       </div>
    </div>
  );
}

export default Home;

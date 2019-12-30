import React, {  } from 'react';
import TopHeader from "./TopHeader";
import Navigation from "../../shared/navigation/Navigation"
import Logo from "../../shared/logo/Logo";
import Search from "../../shared/search/Search";
import "./header.scss"
import Button from "../../shared/buttons/Button";
import {  mainNavigation , linkTour} from "../../../static/navigation";
import {FiUser,FiMessageCircle,FiShoppingCart,FiDroplet} from "react-icons/fi";
import Card from "../../shared/card/Card";
import HeaderHalp from "../../shared/navigation/HeaderHalp";
import HeaderLogin from "../../shared/navigation/HeaderLogin";
export const userNavigationInfo = {
  type:"userNavigation",
  navClass:"userNavigation",
  navLinkInfo: [
    { title: {en:"Sign In",fn:"Sign In"}, slug: '', desingClass:'singIn', icon: <FiUser size={20}/> ,  childComponent:<HeaderLogin type="header" />}, 
    { title: {en:"Help",fn:"Help"}, slug: '', desingClass:'help',icon: <FiMessageCircle size={20}/>  , childComponent:<HeaderHalp type="header" /> }, 
    { title: {en:"Cart",fn:"Cart"}, slug: '', desingClass:'cart',icon: <FiShoppingCart size={20} /> , childComponent:<Card type="header" />}
  ]
};
/**
 *Name: MainHeader
 *Desc: MainHeader component for desktop view header section.
 */



function MainHeader() {
  return (
    <div className="header-wrapper">
      <TopHeader />
      <div className="headerMiddle">  
        <Logo  />
        <Search />
        <div className="link-toner-wrapper">
          <Button buttonInfo={linkTour} onChangefun={()=>{console.log("hello")}}><FiDroplet/></Button>
        </div>
        <Navigation info={userNavigationInfo} />
      </div>
      <div className="main-navigation">
         <Navigation info={mainNavigation} />
      </div>
    </div>
  );
}




export default MainHeader;

import React, {  } from 'react';
import TopHeader from "./TopHeader";
import Navigation from "../../shared/navigation/Navigation"
import Logo from "../../shared/logo/Logo";
import Search from "../../shared/search/Search";
import  { ReactComponent as Icons } from "../../../assets/images/search-icon.svg"
import "./header.scss"
import Button from "../../shared/buttons/Button";
import {userNavigationInfo , mainNavigation , linkTour} from "../../../static/navigation";
function MainHeader() {
  return (
    <div className="header-wrapper">
      <TopHeader />
      <div className="headerMiddle">
        <Logo  />
        <Search />
        <div className="link-toner-wrapper">
          <Button buttonInfo={linkTour}><Icons/></Button>
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

import React, { Fragment, useState } from 'react';
import TopHeader from "./TopHeader";
import Navigation from "../../shared/navigation/Navigation"
import Logo from "../../shared/logo/Logo";
import Search from "../../shared/search/Search";
import "./header.scss"
import Button from "../../shared/buttons/Button";
import { mainMobileNavigation, linkTour } from "../../../static/navigation";
import HeaderLogin from "../../shared/navigation/HeaderLogin";
import { FiUser, FiMessageCircle, FiShoppingCart, FiX, FiMenu } from "react-icons/fi";

import Card from "../../shared/card/Card";
import HeaderHalp from "../../shared/navigation/HeaderHalp";
export const userNavigationInfo = {
    type: "userNavigation",
    navClass: "userNavigation",
    navLinkInfo: [
        { title: {en:'',fn:''}, slug: 'sign-in', desingClass:'singIn', icon: <FiUser size={25} /> ,  childComponent:<HeaderLogin type="header" /> } ,
        { title: {en:'',fn:''}, slug: 'help', desingClass:'help', icon: <FiMessageCircle size={25} />  ,  childComponent:<HeaderHalp type="header" />},
        { title: {en:'',fn:''}, slug: 'cart', desingClass:'cart', icon: <FiShoppingCart size={25} /> ,  childComponent:<Card type="header" /> }
    ]
};
/**
 *Name: SmallHeader
 *Desc: SmallHeader component for mobile view header section.
 */

function SmallHeader() {
    const [navToggle, setToggle] = useState(false);
    return (
        <Fragment>
            <div className="header-wrapper">
                <TopHeader />
                <div className="headerMiddle">
                    <div className="mobile-navigation">
                        <Button buttonInfo={{type : 'button', buttonClass: 'heading-btn', title: {fn: '',en:''},slug : ""}} onChangefun={() => { setToggle(!navToggle) }}>{navToggle ? <FiX /> : <FiMenu />}</Button>
                    </div>
                    <Logo />
                    <Navigation info={userNavigationInfo} />
                </div>
                <div className="header-sm-search">
                    <Search />
                    <div className="link-toner-wrapper">
                        <Button buttonInfo={linkTour} onChangefun={()=>{}}></Button>
                    </div>
                </div>
            </div>
            {
                navToggle && <div className="mobile-navigation-wrapper">
                    <Navigation info={mainMobileNavigation} />
                </div>
            }

        </Fragment>

    );
}

export default SmallHeader;

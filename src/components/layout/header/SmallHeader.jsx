import React, { Fragment , useState } from 'react';
import TopHeader from "./TopHeader";
import Navigation from "../../shared/navigation/Navigation"
import Logo from "../../shared/logo/Logo";
import Search from "../../shared/search/Search";
import "./header.scss"
import Button from "../../shared/buttons/Button";
import {userNavigationInfo , mainMobileNavigation , linkTour} from "../../../static/navigation";



function SmallHeader() {
    const [navToggle , setToggle] = useState(false);
    return (
        <Fragment>
            <div className="header-wrapper">
                <TopHeader />
                <div className="headerMiddle">
                    <div className="mobile-navigation">
                        <a onClick={()=>{setToggle(!navToggle)}}>toggle</a>
                    </div>
                    <Logo />
                    <Navigation info={userNavigationInfo} />
                </div>
                <div className="header-sm-search">
                    <Search />
                    <div className="link-toner-wrapper">
                        <Button buttonInfo={linkTour}></Button>
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

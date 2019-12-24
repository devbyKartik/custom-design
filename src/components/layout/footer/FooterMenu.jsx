import React, { } from 'react';
import Navigation from "../../shared/navigation/Navigation"
import "./footer.scss"
import { footerMenuCustomerServics, footerMenuCorporateInfo, staplesCorporateSolutions, staplesNewCustomer } from "../../../static/navigation";

/**
 *Name: FooterMenu
 *Desc: MainHeader component for desktop view header section.
 */


function FooterMenu() {
    return (
        <div className="footer-top-wrapper">
           <div className="footer-top-wrapper__single-section">
                <Navigation info={footerMenuCustomerServics} />
            </div>
            <div className="footer-top-wrapper__single-section">
                <Navigation info={footerMenuCorporateInfo} />
            </div>
            <div className="footer-top-wrapper__single-section">
                <Navigation info={staplesCorporateSolutions} />
            </div>
            <div className="footer-top-wrapper__single-section">
                <Navigation info={staplesNewCustomer} />
            </div>
        </div>
    );
}




export default FooterMenu;

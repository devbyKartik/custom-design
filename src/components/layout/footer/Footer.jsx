import React  from 'react';
import FooterMenu from "./FooterMenu";
import SocialLinks from "../../shared/socail/SocialLinks";
import PartnarImages from "../../shared/partnarImages/PartnarImages";
import Navigation from "../../shared/navigation/Navigation";
import {bottomFooterText} from "../../../static/navigation";
import Text from "../../shared/text/Text";
/**
 *Name: Footer
 *Desc: Footer component for  Footer section include mobile and main footer.
 */


function Footer() {
  return (
    <div className="footer-wrapper">
       <div className="main-footer">
         <FooterMenu/>
       </div>
       <div className="bottom-footer">
         <div className="bottom-footer__social-share">
           <SocialLinks/>
         </div>
         <div className="bottom-footer__partnar-section">
           <PartnarImages />
         </div>
       </div>
       <div className="copy-right-footer">
          <Text type="white">Copyright 2001-2019, Corporate Express Canada, Inc., a Staples Company. All Rights Reserved.</Text>
          <div className="footer-bottom-menu">
            <Navigation info={bottomFooterText} />
          </div>
       </div>
   </div>
  );
}

export default Footer;







import React  from 'react';
import "./social.scss"
import { FaFacebookF , FaTwitter ,FaPinterestP,FaLinkedinIn} from 'react-icons/fa';
/**
 *Name: SocialLinks
 *Desc: SocialLinks component for  Social Links list .
 */


function SocialLinks() {
  return (
    <div className="social-links">
      <h3>Join us on</h3>
      <ul>
          <li><a href="facebook.com"><FaFacebookF/></a></li>
          <li><a href="facebook.com"><FaTwitter/></a></li>
          <li><a href="facebook.com"><FaPinterestP/></a></li>
          <li><a href="facebook.com"><FaLinkedinIn/></a></li>
      </ul>
    </div>
  );
}

export default SocialLinks;







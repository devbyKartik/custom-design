import React  from 'react';
import "./social.scss"
import { FaFacebookF , FaTwitter ,FaPinterestP,FaLinkedinIn} from 'react-icons/fa';
import ListGroup from "../list/ListGroup";
import List from "../list/List";
import Button from "../buttons/Button";
/**
 *Name: SocialLinks
 *Desc: SocialLinks component for  Social Links list .
 */


function SocialLinks() {
  return (
    <div className="social-links">
      <h3>Join us on</h3>
      <ListGroup>
          <List><Button buttonInfo={{type : 'button', buttonClass: 'socialLinks', title: {fn: '',en:''},slug : ""}} onChangefun={() => {}}><FaFacebookF/></Button></List>
          <List><Button buttonInfo={{type : 'button', buttonClass: 'socialLinks', title: {fn: '',en:''},slug : ""}} onChangefun={() => { }}><FaTwitter/></Button></List>
          <List><Button buttonInfo={{type : 'button', buttonClass: 'socialLinks', title: {fn: '',en:''},slug : ""}} onChangefun={() => { }}><FaPinterestP/></Button></List>
          <List><Button buttonInfo={{type : 'button', buttonClass: 'socialLinks', title: {fn: '',en:''},slug : ""}} onChangefun={() => { }}><FaLinkedinIn/></Button></List>
      </ListGroup>
    </div>
  );
}

export default SocialLinks;







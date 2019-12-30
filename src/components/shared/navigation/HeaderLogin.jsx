import React  from 'react';
import "./navigation.scss"
import  UserLogin from "../UserLogin/UserLogin";
import GuestLogin from "../UserLogin/GuestLogin";
import Heading from "../text/Heading";
/**
 *Name: HeaderLogin
 *Desc: HeaderLogin component for user menu login section .
 */

function HeaderLogin(props) {
    return (
      <div className="header-login-wrapper">
        <div className="header-login-wrapper__header">
          <Heading type="h3"  color="d-gray" text={"Sing in"} />
        </div>
        <div className="header-login-wrapper__form">
           <UserLogin/>
           <GuestLogin />
        </div>
        
      </div>
    );
}







export default HeaderLogin;

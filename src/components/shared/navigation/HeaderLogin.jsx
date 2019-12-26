import React  from 'react';
import "./navigation.scss"
import  UserLogin from "../UserLogin/UserLogin";
import GuestLogin from "../UserLogin/GuestLogin";
/**
 *Name: HeaderLogin
 *Desc: HeaderLogin component for user menu login section .
 */

function HeaderLogin(props) {
    return (
      <div className="header-login-wrapper">
        <div className="header-login-wrapper__header">
           <h3>Sing in</h3>
        </div>
        <div className="header-login-wrapper__form">
           <UserLogin/>
           <GuestLogin />
        </div>
        
      </div>
    );
}







export default HeaderLogin;

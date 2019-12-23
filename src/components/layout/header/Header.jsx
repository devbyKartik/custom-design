import React from 'react';
import MainHeader from "./MainHeader";
import SmallHeader from "./SmallHeader";
import "./header.scss"
function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-header">
        <MainHeader />
      </div>
      <div className="mobile-header">
        <SmallHeader/>
      </div>
    </div>
  );
}

export default Header;

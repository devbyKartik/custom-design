import React from 'react';
import MainHeader from "./MainHeader";
import SmallHeader from "./SmallHeader";
import "./header.scss";

/**
 *Name: Header
 *Desc: Header component for  header section include mobile and main header.
 */


function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-header">
        <MainHeader />
      </div>
      <div className="mobile-header">
        <SmallHeader />
      </div>
    </div>
  );
}

export default Header;

import React  from 'react';
import "./navigation.scss"
import Button from "../buttons/Button"
/**
 *Name: HeaderHalp
 *Desc: HeaderHalp component for user menu help links .
 */

function HeaderHalp(props) {
    return (
      <div className="header-help-wrapper">
        <div className="header-help-wrapper__list">
           <Button buttonInfo={{type : 'button', buttonClass: 'header-help-wrapper__list__a transparent', title: {fn: 'hello one',en:'hello one'},slug : ""}} onChangefun={() => {}}></Button>
        </div>
        <div className="header-help-wrapper__list">
        <Button buttonInfo={{type : 'button', buttonClass: 'header-help-wrapper__list__a transparent', title: {fn: 'hello one',en:'hello one'},slug : ""}} onChangefun={() => {}}></Button>
        </div>
        <div className="header-help-wrapper__list">
        <Button buttonInfo={{type : 'button', buttonClass: 'header-help-wrapper__list__a transparent', title: {fn: 'hello one',en:'hello one'},slug : ""}} onChangefun={() => {}}></Button>
        </div>
        
      </div>
    );
}







export default HeaderHalp;

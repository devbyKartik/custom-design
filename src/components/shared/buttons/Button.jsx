import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import {Laguage} from "../../../services/context/Language";
/**
 *Name: Button
 *Desc: Button component for simple button with daynamic class.
 */
import "./button.scss"
function Button(props) {
  const language = useContext(Laguage);
  const { title, buttonClass, type} = props.buttonInfo;
  const {onChangefun}=props;

  return (
    <Fragment>
       <button onClick={(e)=>onChangefun(e)} className={buttonClass + " button-text " } type={type} >{props.children}{title[language]}</button>
    </Fragment>
  );
}

// Props Validation
Button.propTypes = {
  buttonInfo: PropTypes.object,
  onChangefun:PropTypes.func
}


export default Button;

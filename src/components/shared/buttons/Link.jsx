import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import {Laguage} from "../../../services/context/Language";
/**
 *Name: Button
 *Desc: Button component for simple button with daynamic class.
 */
import "./button.scss"
function Link(props) {
  const language = useContext(Laguage);
  const { title, buttonClass, type, slug} = props.buttonInfo;

  return (
    <Fragment>
       <a href={slug} className={buttonClass + " button-text " + type}>{props.children}{title[language]}</a>
    </Fragment>
  );
}

// Props Validation
Link.propTypes = {
  buttonInfo: PropTypes.object,
}


export default Link;

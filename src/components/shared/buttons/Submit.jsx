import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import {Laguage} from "../../../services/context/Language";
/**
 *Name: Submit
 *Desc: Submit component for simple Submit button with daynamic class.
 */
import "./button.scss"
function Submit(props) {
  const language = useContext(Laguage);
  const { title, buttonClass, type } = props.buttonInfo;

  return (
    <Fragment>
       <input type="submit" value={title[language]}  className={buttonClass + " button-text " + type} /> 
    </Fragment>
  );
}

// Props Validation
Submit.propTypes = {
  buttonInfo: PropTypes.object,
}


export default Submit;

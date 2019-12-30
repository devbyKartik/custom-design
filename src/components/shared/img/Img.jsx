import React from 'react';
import "./img.scss"
import PropTypes from 'prop-types';
/**
 *Name: Img
 *Desc: Img component for simple img tag.
 */

function Img(props) {
    const {cssClass,version,title,src}=props;

   return (
    <img src={src} className={"img "+ cssClass + " "+version} alt={title} />
  );
}

// Props Validation
Img.propTypes = {
    src: PropTypes.string,
    cssClass:PropTypes.string,
    version: PropTypes.string,
    title:PropTypes.string,
  }
export default Img;

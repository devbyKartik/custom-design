import React ,{Fragment} from 'react';
import PropTypes from 'prop-types';
/**
 *Name: Button
 *Desc: Button component for simple button with daynamic class.
 */
import "./button.scss"
function Button(props) {
    const {title,buttonClass,type , slug}= props.buttonInfo;
  return (
    <Fragment> 
        {
            type === 'simple' ? <a href={slug} className={buttonClass +" button-text"}>{props.children}{title}</a> : ''
        }
          
    </Fragment>
  );
}

// Props Validation
Button.propTypes = {
  buttonInfo: PropTypes.object,
}


export default Button;

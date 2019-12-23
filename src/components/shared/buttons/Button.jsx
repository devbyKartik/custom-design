import React ,{Fragment} from 'react';

import "./button.scss"
function Button(props) {
    const {title,buttonClass,type}= props.buttonInfo;
  return (
    <Fragment> 
        {
            type === 'simple' ? <a className={buttonClass}>{props.children}{title}</a> : ''
        }
          
    </Fragment>
  );
}

export default Button;

import React ,{Fragment} from 'react';

import  { ReactComponent as LogoImage } from "../../../assets/images/staples_logo.svg"
function Logo() {
  return (
    <Fragment>
       <div className="logo">
       <LogoImage />
       </div>
    </Fragment>
  );
}

export default Logo;

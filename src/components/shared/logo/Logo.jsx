import React ,{Fragment} from 'react';

import  { ReactComponent as LogoImage } from "../../../assets/images/staples_logo.svg"
/**
 *Name: Logo
 *Desc: Logo component for  header logo.
 */

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

import React ,{Fragment} from 'react';
import { Link} from "react-router-dom";
import  { ReactComponent as LogoImage } from "../../../assets/images/staples_logo.svg"
/**
 *Name: Logo
 *Desc: Logo component for  header logo.
 */

function Logo() {
  return (
    <Fragment>
       <div className="logo">
        <Link to="/"><LogoImage /></Link> 
       </div>
    </Fragment>
  );
}

export default Logo;

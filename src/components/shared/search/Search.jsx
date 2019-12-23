import React ,{Fragment} from 'react';
import "./search.scss";
import Button from "../buttons/Button";
import  { ReactComponent as Icons } from "../../../assets/images/search-icon.svg"
function Search() {
  const buttonInfo={
    type:'simple',
    buttonClass:'search-btn',
    title : '',
  }
  return (
    <Fragment>
       <div className="search-wrapper">
         <input  placeholder="search for all your business need"></input>
         <Button buttonInfo={buttonInfo}><Icons /></Button>
       </div>
    </Fragment>
  );
}

export default Search;

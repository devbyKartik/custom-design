import React ,{Fragment} from 'react';
import "./search.scss";
import InputGroup from '../FormControl/'
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
         {/* <input  placeholder="search for all your business need"></input> */}
         <InputGroup
            label={""}
            type="text"
            name="search"
            // id="search-header"
            onChange={event => {
            }}
            placeholder="search for all your business need"
            // errors={false}
            // dirties={false}
          />
         <Button buttonInfo={buttonInfo} onChangefun={()=>{console.log("hello")}}><Icons /></Button>
       </div>
    </Fragment>
  );
}

export default Search;

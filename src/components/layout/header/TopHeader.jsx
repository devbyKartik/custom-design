import React ,{Fragment} from 'react';
import Button from "../../shared/buttons/Button";
import Select from "../../shared/FormControl/Select";

function TopHeader() {
  const buttonInfo={
    type:'simple',
    buttonClass:'live-chat',
    title : 'Live Chat',
  }
  const selectOption={
    options:[{value:"En",name:"En"},{value:"Fn",name:"Fn"}]
  }
  return (
    <Fragment>
      <div className="topHeaderWrapper">
        <div className="topHeaderWrapper__languageSelect">
        <Select label="" id="lang" options={selectOption.options} />
           
        </div>
        <div className="topHeaderWrapper__liveChat">
           <Button buttonInfo={buttonInfo}></Button>
        </div>
      </div>
      
    </Fragment>
  );
}

export default TopHeader;

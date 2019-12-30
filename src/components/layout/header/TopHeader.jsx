import React, { Fragment } from 'react';
import Button from "../../shared/buttons/Button";
import Select from "../../shared/FormControl/Select";
import { liveChat, langSelectOption } from "../../../static/navigation";

/**
 *Name: TopHeader
 *Desc: TopHeader component for top header section before main header.
 */



function TopHeader() {

  return (
    <Fragment>
      <div className="topHeaderWrapper">
        <div className="topHeaderWrapper__languageSelect">
          <Select label="" id="lang" options={langSelectOption.options} />
        </div>
        <div className="topHeaderWrapper__liveChat">
          <Button buttonInfo={liveChat} onChangefun={()=>{console.log("hello")}}></Button>
        </div>
      </div>
    </Fragment>
  );
}

export default TopHeader;

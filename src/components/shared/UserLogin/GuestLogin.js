import React from 'react'

import Button from "../buttons/Button";
import InputGroup from '../FormControl/'
import  './UserLogin.scss';
import {headerLoginShopAsGuestButton} from "../../../static/navigation";
import Text from "../text/Text";


const GuestLogin = ({ setCurrentState }) => {



  return (
    <div className="mainBlock">
      <Text type="black">Don't have a login and want to shop as a guest? Enter your postal code below and start shopping as a  guest , right away!</Text>
      <form>
        <div className="padding">
          <InputGroup
            label={"Postal Code"}
            type="text"
            name="postCode"
            id="postCode"
            onChange={event => {
            }}
            
          />
        </div>
       
       

        <div className="block">
          <Button buttonInfo={headerLoginShopAsGuestButton} onChangefun={()=>{}} />
        </div>
      </form>

    
    </div>
  )
}

export default GuestLogin

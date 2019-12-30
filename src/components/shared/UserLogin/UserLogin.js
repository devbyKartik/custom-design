import React from 'react'
import Button from "../buttons/Button";
import InputGroup from '../FormControl/'
import  './UserLogin.scss';
import {headerSignInButton,headerLoginPasswordButton,headerLoginUserIdButton,headerLoginCustomersClickButton} from "../../../static/navigation";
import Text from "../text/Text";


const UserLogin = ({ setCurrentState }) => {




  return (
    <div className="mainBlock">
     
      <form
       
      >
        <div className="padding">
          <InputGroup
            label={"User Id"}
            type="text"
            name="userid"
            id="userId"
            onChange={event => {
            }}
          
          />
        </div>
        <div className="padding">
          <InputGroup
            label={"Password"}
            name="password"
            type="password"
            id="password"
            onChange={event => { }}
           
          />
        </div>
       

        <div className="block">
          <Button buttonInfo={headerSignInButton} type="submit" onChangefun={()=>{console.log("hello")}} />
        </div>
      </form>

      <div className="form-bottom">
        <Text type="link">Forgot <Button buttonInfo={headerLoginPasswordButton}  onChangefun={()=>{console.log("hello")}} /> or <Button onChangefun={()=>{console.log("hello")}} buttonInfo={headerLoginUserIdButton}/></Text>
        <Text type="link">Federal Government Customers? <Button buttonInfo={headerLoginCustomersClickButton} /> </Text>
      </div>
    </div>
  )
}

export default UserLogin

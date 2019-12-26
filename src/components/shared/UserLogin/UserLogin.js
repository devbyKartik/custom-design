import React from 'react'
import Button from "../buttons/Button";
import InputGroup from '../FormControl/'
import  './UserLogin.scss';
import {headerSignInButton,headerLoginPasswordButton,headerLoginUserIdButton,headerLoginCustomersClickButton} from "../../../static/navigation";



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
            errors={false}
            dirties={false}
          />
        </div>
        <div className="padding">
          <InputGroup
            label={"Password"}
            name="password"
            type="password"
            id="password"
            onChange={event => { }}
            errors={false}
            dirties={false}
          />
        </div>
       

        <div className="block">
          <Button buttonInfo={headerSignInButton} />
        </div>
      </form>

      <div className="form-bottom">
        <p>Forgot <Button buttonInfo={headerLoginPasswordButton} /> or <Button buttonInfo={headerLoginUserIdButton}/></p>
        <p>Federal Government Customers? <Button buttonInfo={headerLoginCustomersClickButton} /> </p>
      </div>
    </div>
  )
}

export default UserLogin

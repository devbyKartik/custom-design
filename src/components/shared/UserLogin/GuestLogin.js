import React from 'react'

import Button from "../buttons/Button";
import InputGroup from '../FormControl/'
import  './UserLogin.scss';
import {headerLoginShopAsGuestButton} from "../../../static/navigation";



const GuestLogin = ({ setCurrentState }) => {
//   const [formState, setFormState] = useState({
//     errors: {},
//     dirties: {},
//     signInErrorMessage: ''
//   })
//  useEffect(() => {
//     isMounted = true
//     return () => {
//       isMounted = false
//     }
//   }, [])



  return (
    <div className="mainBlock">
      <p>Don't have a login and want to shop as a guest? Enter your postal code below and start shopping as a  guest , right away!</p>
      <form
       
      >
        <div className="padding">
          <InputGroup
            label={"Postal Code"}
            type="text"
            name="userid"
            id="userId"
            onChange={event => {
            }}
            errors={false}
            dirties={false}
          />
        </div>
       
       

        <div className="block">
          <Button buttonInfo={headerLoginShopAsGuestButton} />
        </div>
      </form>

    
    </div>
  )
}

export default GuestLogin

import React from 'react';
//import "./.scss"
/**
 *Name: List
 *Desc: List component for all type of lu .
 */

function List(props) {
   const {children,cssClassName}=props;
  return (
     <li  className={cssClassName} >{children}</li>
   );
}




export default List;

import React from 'react';
//import "./.scss"
/**
 *Name: ListGroup
 *Desc: ListGroup component for all type of ul lu .
 */

function ListGroup(props) {
   const {children,cssClassName}=props;
  return (
     <ul className={cssClassName}>
      {children}
     </ul>
    
  );
}




export default ListGroup;

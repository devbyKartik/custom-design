import React, { Fragment } from 'react';
import "./text.scss"
/**
 *Name: Text
 *Desc: Text component for simple Text .
 */

function Text(props) {
  const {children,type}=props;
  return (
    <Fragment>
       <p className={"text-"+type}>{children}</p>
    </Fragment>
  );
}




export default Text;

import React from 'react'
import "./text.scss";

const Heading = ({ text, type ,color ,children}) => {
  return (
    <>
      {type === 'h5' && <h5 className={"heading-"+color}>{text}{children}</h5>}
      {type === 'h4' && <h4 className={"heading-"+color}>{text}{children}</h4>}
      {type === 'h3' && <h3 className={"heading-"+color}>{text}{children}</h3>}
      {type === 'h2' && <h2 className={"heading-"+color}>{text}{children}</h2>}
      {type === 'h1' && <h1 className={"heading-"+color}>{text}{children}</h1>}
    </>
  )
}

export default Heading

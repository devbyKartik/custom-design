import React  from 'react';
import "./partnar-img.scss"
import { ReactComponent as Bull } from "../../../assets/images/bull.svg";
import ListGroup from "../list/ListGroup";
import List from "../list/ListGroup";
import Button from "../buttons/Button";
/**
 *Name: PartnarImages
 *Desc: PartnarImages component for  Partnar Image Links list .
 */


function PartnarImages() {
  return (
    <div className="partnar-image-links">
      <ListGroup>
         <List><Button buttonInfo={{type : 'button', buttonClass: 'transparent', title: {fn: '',en:''},slug : ""}} onChangefun={() => {}}><Bull/></Button></List>
         <List><Button buttonInfo={{type : 'button', buttonClass: 'transparent', title: {fn: '',en:''},slug : ""}} onChangefun={() => {}}><Bull/></Button></List>
      </ListGroup>
    </div>
  );
}

export default PartnarImages;







import React  from 'react';
import "./partnar-img.scss"
import { ReactComponent as Bull } from "../../../assets/images/bull.svg";
/**
 *Name: PartnarImages
 *Desc: PartnarImages component for  Partnar Image Links list .
 */


function PartnarImages() {
  return (
    <div className="partnar-image-links">
      <ul>
         <li><a href="#"><Bull/></a></li>
         <li><a href="#"><Bull/></a></li>
      </ul>
    </div>
  );
}

export default PartnarImages;







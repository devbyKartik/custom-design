import React, { useState } from 'react';
import "./navigation.scss";
import { ReactComponent as Icons } from "../../../assets/images/search-icon.svg"
function Navigation(props) {
  const { navLinkInfo, type, navClass } = props.info;
  return (
    <div className={navClass}>
      {
        type === "mobile" && <ul className={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}>{ToggleSubNavigation(nav)}</li>
            )
          }
        </ul>
      }
      {
        type === "simple" && <ul className={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}><Icons />{nav.title}</li>
            )
          }

        </ul>
      }

      {
        type === "product" && <ul className={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}>{ToggleMainProductMenu(nav)}</li>
            )
          }

        </ul>
      }


      {
        type === "userNavigation" && <ul className={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}>{ToggleSlideMenu(nav)}</li>
            )
          }

        </ul>
      }

    </div>
  );
}


function ToggleSubNavigation(nav) {
  const { title, child,  parent } = nav
  const [childToggle, setChildToggle] = useState(false)
  return (
    <div className="single-toggle-child">
      <p>{title} {parent && <span className="mobile-child-navigation" onClick={() => { setChildToggle(!childToggle) }}> {childToggle ? '^' : ">"}</span>}</p>
      {
        childToggle && <ul className="mobile-child-list">
          {child && child.length > 1 && child.map((itm, index) =>
            <li key={index}>{itm.title}</li>
          )

          }
        </ul>
      }

    </div>
  )

}

function ToggleSlideMenu(nav) {
  const { title } = nav
  const [childToggle, setChildToggle] = useState(false)
  return (
    <div className="single-toggle-child">
      <p onClick={() => { setChildToggle(!childToggle) }}><Icons />{title}</p>
      {
        childToggle &&
        <div className="modal-toggle-sub-menu">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

      }

    </div>
  )

}

function ToggleMainProductMenu(nav) {
  const { title } = nav
  const [childToggle, setChildToggle] = useState(false);
  const closeToggle=()=>setChildToggle(false);
  return (
    <div className="single-toggle-child">
      <p className={childToggle ? 'active' :''} onClick={() => { setChildToggle(!childToggle) }} ><Icons />{title}</p>

      {
        childToggle &&
        <div className="product-toggle-sub-menu" onMouseLeave={() => { setChildToggle(false) }}>
          
          <div className="product-toggle-sub-menu__container"> 
              {productMegaMenu(nav , closeToggle )}
          </div>
        </div>

      }

    </div>
  )
}

function productMegaMenu(nav , closeToggle){

  return(
    <div className="productMegaMenu-wrapper">
       <div className="productMegaMenu-wrapper__left-sidebar">
           <ul>
             <li >Category one</li>
             <li className="active">Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
             <li>Category one</li>
           </ul>
       </div>
       <div className="productMegaMenu-wrapper__container-link">
           <div className="right-side-mega">
             <a  className="close-button" onClick={()=>closeToggle()}>Close</a>
              <div className="right-side-mega__sections">
                 
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
              </div>
              <div className="right-side-mega__sections">
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
              </div>
              <div className="right-side-mega__sections">
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
                 <div className="right-side-mega__single-section">
                   <p className="category-heading">Heading one</p>
                   <ul>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                     <li>product one        product & two</li>
                    </ul>
                 </div>
              </div>
           </div>
       </div>
    </div>
  )

}


export default Navigation;

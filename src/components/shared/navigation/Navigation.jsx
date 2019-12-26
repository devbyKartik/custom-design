import React, { useState, Fragment } from 'react';
import "./navigation.scss";
import {FiChevronDown  , FiChevronUp} from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 *Name: Navigation
 *Desc: Navigation component for  all types of menus.
 */


function Navigation(props) {
  const { navLinkInfo, type, navClass, heading } = props.info;
  const [footerMobileToggle, setFooterMobileToggle] = useState(false);
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
              <li key={index}><a href={nav.slug}>{nav.title}</a></li>
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
              <li key={index} >{ToggleSlideMenu(nav , navLinkInfo.length,index)}</li>
            )
          }

        </ul>
      }

      {
        type === "footerLinks" &&
        <Fragment>
          <div className={"desktop-view"}>
            <h3>{heading}</h3>
            <ul className={navClass + "__nav-list"}>
              {
                navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
                  <li key={index}><a href={nav.slug}>{nav.title}</a></li>
                )
              }

            </ul>
          </div>
          <div className={"mobile-view"}>
            <h3 onClick={() => { setFooterMobileToggle(!footerMobileToggle) }}>{heading}</h3>
            {
              footerMobileToggle && <ul className={navClass + "__nav-list"}>
                {
                  navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
                    <li key={index}>{nav.title}</li>
                  )
                }

              </ul>
            }

          </div>

        </Fragment>

      }



    </div>
  );
}


/**
 *Name: ToggleSubNavigation
 *Desc: ToggleSubNavigation component for  mobile sub menus.
 */

function ToggleSubNavigation(nav) {
  const { title, child, parent } = nav
  const [childToggle, setChildToggle] = useState(false)
  return (
    <div className="single-toggle-child">
    
      <p >{title} {parent && <span className="mobile-child-navigation" onClick={() => { setChildToggle(!childToggle) }}> {childToggle ?  <FiChevronUp/>:<FiChevronDown/>}</span>}</p>
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

/**
 *Name: ToggleSlideMenu
 *Desc: ToggleSlideMenu component for  user  menus.
 */



function ToggleSlideMenu(nav, length,index) {
  const { title ,icon,childComponent,desingClass} = nav
  const [childToggle, setChildToggle] = useState(false);
  const activeCalss=childToggle? 'grayActive':''
  return (
    <div className={"single-toggle-child " + activeCalss}>
    
  <p onClick={() => { setChildToggle(!childToggle) }}> {icon}{title}</p>
  {
    length===index+1? <div className="cart-bottom-line"></div> :''
  }
      {
        childToggle &&
        <div className={desingClass + " modal-toggle-sub-menu "}>
          {childComponent}
        </div>

      }

    </div>
  )

}

/**
 *Name: ToggleMainProductMenu
 *Desc: ToggleMainProductMenu component for  main  menus.
 */


function ToggleMainProductMenu(nav) {
  const { title } = nav
  const [childToggle, setChildToggle] = useState(false);
  const closeToggle = () => setChildToggle(false);
  return (
    <div className="single-toggle-child">
      <p className={childToggle ? 'active' : ''} onClick={() => { setChildToggle(!childToggle) }} >{title} {childToggle ? <FiChevronUp size="18" />:<FiChevronDown size="18" />} </p>

      {
        childToggle &&
        <div className="product-toggle-sub-menu" onMouseLeave={() => { setChildToggle(false) }}>

          <div className="product-toggle-sub-menu__container">
            {productMegaMenu(nav, closeToggle)}
          </div>
        </div>

      }

    </div>
  )
}


/**
 *Name: productMegaMenu
 *Desc: productMegaMenu component for  product  menus toggle slider.
 */



function productMegaMenu(nav, closeToggle) {

  return (
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
          <a className="close-button" onClick={() => closeToggle()}>Close</a>
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


// Props Validation
Navigation.propTypes = {
  info: PropTypes.object,
}



export default Navigation;

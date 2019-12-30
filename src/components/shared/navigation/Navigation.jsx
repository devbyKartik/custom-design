import React, { useState, Fragment, useContext } from 'react';
import "./navigation.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import PropTypes from 'prop-types';
import { Laguage } from "../../../services/context/Language";
import ListGroup from "../list/ListGroup";
import Heading from "../text/Heading";
import Button from "../buttons/Button"
/**
 *Name: Navigation
 *Desc: Navigation component for  all types of menus.
 */



function Navigation(props) {
  const { navLinkInfo, type, navClass, heading } = props.info;
  const [footerMobileToggle, setFooterMobileToggle] = useState(false);
  const language = useContext(Laguage);
  return (
    <div className={navClass}>
      {
        type === "mobile" && <ListGroup cssClassName={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}>{ToggleSubNavigation(nav)}</li>
            )
          }
        </ListGroup>
      }
      {
        type === "simple" && <ListGroup cssClassName={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}><a href={nav.slug}>{nav.title}</a></li>
            )
          }

        </ListGroup>
      }

      {
        type === "product" && <ListGroup cssClassName={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index}>{ToggleMainProductMenu(nav)}</li>
            )
          }

        </ListGroup>
      }


      {
        type === "userNavigation" && <ListGroup cssClassName={navClass + "__nav-list"}>
          {
            navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
              <li key={index} >{ToggleSlideMenu(nav, navLinkInfo.length, index)}</li>
            )
          }

        </ListGroup>
      }

      {
        type === "footerLinks" &&
        <Fragment>
          <div className={"desktop-view"}>
            <Heading type="h3" color="white" text={heading[language]} />
            <ListGroup cssClassName={navClass + "__nav-list"}>
              {
                navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
                  <li key={index}><a href={nav.slug}>{nav.title[language]}</a></li>
                )
              }

            </ListGroup>
          </div>
          <div className={"mobile-view"}>
            <Button buttonInfo={{type : 'button', buttonClass: 'heading-btn', title: {fn: '',en:''},slug : ""}} onChangefun={() => { setFooterMobileToggle(!footerMobileToggle) }}>
              <Heading type="h3" color="white" text={heading[language]} />
            </Button>

          {
            footerMobileToggle && <ListGroup cssClassName={navClass + "__nav-list"}>
              {
                navLinkInfo && navLinkInfo.length > 0 && navLinkInfo.map((nav, index) =>
                  <li key={index}>{nav.title[language]}</li>
                )
              }

            </ListGroup>
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
  const language = useContext(Laguage);
  const { title, child, parent } = nav
  const [childToggle, setChildToggle] = useState(false)
  return (
    <div className="single-toggle-child">

      <p >{title[language]} {parent && <span className="mobile-child-navigation" onClick={() => { setChildToggle(!childToggle) }}> {childToggle ? <FiChevronUp /> : <FiChevronDown />}</span>}</p>
      {
        childToggle && <ListGroup cssClassName="mobile-child-list">
          {child && child.length > 1 && child.map((itm, index) =>
            <li key={index}>{itm.title[language]}</li>
          )

          }
        </ListGroup>
      }

    </div>
  )

}

/**
 *Name: ToggleSlideMenu
 *Desc: ToggleSlideMenu component for  user  menus.
 */



function ToggleSlideMenu(nav, length, index) {
  const language = useContext(Laguage);
  const { title, icon, childComponent, desingClass } = nav
  const [childToggle, setChildToggle] = useState(false);
  const activeCalss = childToggle ? 'grayActive' : ''
  return (
    <div className={"single-toggle-child " + activeCalss}>

      <p onClick={() => { setChildToggle(!childToggle) }}> {icon}{title[language]}</p>
      {
        length === index + 1 ? <div className="cart-bottom-line"></div> : ''
      }
      {
        childToggle &&
        <div  className={desingClass + " modal-toggle-sub-menu "} >
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
  const language = useContext(Laguage);
  const { title } = nav
  const [childToggle, setChildToggle] = useState(false);
  const closeToggle = () => setChildToggle(false);
  return (
    <div className="single-toggle-child">
      <p className={childToggle ? 'active' : ''} onClick={() => { setChildToggle(!childToggle) }} >{title[language]} {childToggle ? <FiChevronUp size="18" /> : <FiChevronDown size="18" />} </p>

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
        <ListGroup cssClassName="">
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
        </ListGroup>
      </div>
      <div className="productMegaMenu-wrapper__container-link">
        <div className="right-side-mega">
          {/* <a className="close-button" onClick={() => closeToggle()}></a> */}
          <Button buttonInfo={{type : 'button', buttonClass: 'close-button transparent', title: {fn: 'Close',en:'Close'},slug : ""}} onChangefun={() => closeToggle()}/>
          <div className="right-side-mega__sections">

            <div className="right-side-mega__single-section">
              <p className="category-heading">Heading one</p>
              <ListGroup>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
              </ListGroup>
            </div>
            <div className="right-side-mega__single-section">
              <p className="category-heading">Heading one</p>
              <ListGroup>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>

              </ListGroup>
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
              <ListGroup>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
              </ListGroup>
            </div>
            <div className="right-side-mega__single-section">
              <p className="category-heading">Heading one</p>
              <ListGroup>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
              </ListGroup>
            </div>
            <div className="right-side-mega__single-section">
              <p className="category-heading">Heading one</p>
              <ListGroup>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
                <li>product one        product & two</li>
              </ListGroup>
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

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from "../list/ListGroup";
import List from "../list/List";
import {FaAngleRight} from "react-icons/fa";
import "./pagination.scss";
function Pagination(props) {
    const { totalPage , showProduct , activePage , onChangePage} = props;
    const ganratePagination=totalPage/showProduct;
    const paginationList= [...Array(ganratePagination).keys()]
    return (
        <div className="pagination-wrapper">
            <ListGroup cssClassName="pagination" >
                {
                    paginationList.length>0 && paginationList.map((itm,index)=><List key={index} cssClassName={itm+1 === activePage ? "active" :''}  ><span onClick={()=>{onChangePage(itm+1)}} >{itm+1}</span></List>)
                }
              { paginationList.length && <List key={paginationList.length+1} ><span onClick={()=>{onChangePage(activePage+1)}} > <FaAngleRight /></span></List> }  
                

            </ListGroup>

        </div>
    );
}
// Props Validation
Pagination.propTypes = {
    totalPage: PropTypes.number,
    activePage:PropTypes.number,
    showProduct:PropTypes.number,
  //  onChangePage:PropTypes.function
}
export default Pagination;

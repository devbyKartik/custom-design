import React from 'react';
import {useParams} from "react-router-dom";
import Heading from "../../components/shared/text/Heading";
import {breadcrumbArray} from "../../services/function";
import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import Pagination from "../../components/shared/pagination/Pagination";
import "./product.scss";
function ProductList() {
    let { id } = useParams();
    const list=[{
            status:true,
            title:"Category Name",
            slug:"/category/"+id
        },
       {
            status:true,
            title:"Sub Category Name",
            slug:"/sub-category/"+id
        }
        
    ]
    const breadcrumbJson=breadcrumbArray({status:true,title:"Gloves and Hand Protection",slug:''},list);
    return (
        <div className="product-wrapper">
           <Breadcrumb listInfo={breadcrumbJson}/>
           <div className="heading-pagination-wrapper">
               <Heading type="h1"  color="gray" text={"Gloves and Hand Protection"} ><span>Showing 1 -24 of 7155 items</span></Heading>
                <Pagination totalPage={100} activePage={2} showProduct={25} onChangePage={(pageNo)=>{console.log("xxxxx",pageNo)}} />
           </div>
           <div className="product-wrapper__container">
              <div className="product-wrapper__container__sidebar">
                 
              </div>
              <div className="product-wrapper__container__body">
              </div>
           </div>
        </div>
    );
}

export default ProductList;

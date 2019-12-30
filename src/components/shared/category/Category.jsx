import React from 'react';
import "./category.scss"
import CategoryCard from "./CategoryCard";
import {categoryList} from "../../../static/navigation";
import Heading from "../text/Heading";
/**
 *Name: CategoryCard
 *Desc: CategoryCard component for single Category card.
 */

function Category(props) {
     return (
    <div className="category-list-wrapper">
    <Heading type="h3"  color="gray" text={"Explore our products and services"} />
       
        {
            categoryList.map((itm,index)=>
               <CategoryCard key={index} categoryInfo={itm}/> 
            )
        }
    </div>
  );
}



export default Category;

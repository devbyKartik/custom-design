import React, { useContext } from 'react';
import "./category.scss"
import PropTypes from 'prop-types';
import * as All from "react-icons/fa";
import { Laguage } from "../../../services/context/Language";
/**
 *Name: CategoryCard
 *Desc: CategoryCard component for single Category card.
 */

function CategoryCard(props) {
  const language = useContext(Laguage);
  const { title, icon } = props.categoryInfo;
  const IconName = All[icon];
  return (
    <div className="category-single__cart">

      <IconName />
      <h3>{title[language]}</h3>
    </div>
  );
}

// Props Validation
CategoryCard.propTypes = {
  categoryInfo: PropTypes.object,
}


export default CategoryCard;

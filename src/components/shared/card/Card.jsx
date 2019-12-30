import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from "../buttons/Button";
import Text from "../text/Text";
import Heading from "../text/Heading";
import { headerCartCheckOutButton, headerCartViewCartButton, headerCartAddCatalogue, headerCartPrintableVersion } from "../../../static/navigation"
/**
 *Name: Card
 *Desc: Card component for card details.
 */
import "./card.scss"
function Card(props) {
    const { type } = props
    return (
        <Fragment>
            {
                type === 'header' && headerCard()
            }
        </Fragment>
    );
}

function headerCard() {
    return (
        <div className="header-card-wrapper">
            <div className="header-card-wrapper__header">
                <Heading type="h3"  color="white" text={"8 Items"} />
            </div>
            <div className="header-card-wrapper__body">
                <table className="card-table">
                    <tbody>
                        <tr>
                            <td>Item 1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Item 1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Item 1</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Item 1</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
                <div className="card-price">
                    <div className="left-section">
                         <Button buttonInfo={{type : 'button', buttonClass: 'transparent red', title: {fn: '+5 More Items',en:'+5 More Items'},slug : ""}} onChangefun={() => {}}></Button>
                    </div>
                    <div className="right-section">
                        <p>Order Total:</p>
                        <h2>$90.00</h2>
                    </div>
                </div>
                <div className="card-button">
                    <Button buttonInfo={headerCartCheckOutButton} onChangefun={()=>{}} />
                    <Button buttonInfo={headerCartViewCartButton} onChangefun={()=>{}} />
                </div>
                <div className="card-footer-link">
                    <Text type="link"><Button buttonInfo={headerCartAddCatalogue} onChangefun={()=>{}} /> to add Catalogue</Text>
                    <Text type="link"><Button buttonInfo={headerCartPrintableVersion} onChangefun={()=>{}} /> for printable version</Text>
                </div>

            </div>
        </div>
    )
}

// Props Validation
Card.propTypes = {
    type: PropTypes.string,
}
export default Card;

import React, { Fragment } from 'react';
import PropTypes, { func } from 'prop-types';
import Button from "../buttons/Button";
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
                <p>8 Items</p>
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
                        <a className="more-items">+5 More Items</a>
                    </div>
                    <div className="right-section">
                        <p>Order Total:</p>
                        <h2>$90.00</h2>
                    </div>
                </div>
                <div className="card-button">
                    <Button buttonInfo={headerCartCheckOutButton} />
                    <Button buttonInfo={headerCartViewCartButton} />
                </div>
                <div className="card-footer-link">
                    <p><Button buttonInfo={headerCartAddCatalogue} /> to add Catalogue</p>
                    <p><Button buttonInfo={headerCartPrintableVersion} /> for printable version</p>
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

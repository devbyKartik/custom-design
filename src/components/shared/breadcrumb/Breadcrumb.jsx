import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListGroup from "../list/ListGroup";
import List from "../list/List";
import { Link } from "react-router-dom";
import "./breadcrumb.scss";
function Breadcrumb(props) {
    const { listInfo } = props;
    return (
        <div className="Breadcrumb-wrapper">
            <ListGroup cssClassName="breadcrumb">
                {/* <List class="breadcrumb-item"><a href="#" role="button">Home</a></List>
                <List class="breadcrumb-item"><a href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">Library</a></List>
                <List class="breadcrumb-item active" aria-current="page"><span class="active">Data</span></List> */}
                {
                    listInfo && listInfo.length > 0 && listInfo.map((itm, index) =>
                        itm.status && <Fragment key={index}>
                            <List >
                                {
                                    itm.slug ? <Link to={itm.slug} role="button" className="listButtonLink">{itm.title}  </Link> : itm.title
                                }
                            </List>
                            {
                                listInfo.length > index+1 && <List >
                                    <span className="breadcrumb-slace">/</span>
                                </List>
                            }

                        </Fragment>


                    )
                }

            </ListGroup>

        </div>
    );
}
// Props Validation
Breadcrumb.propTypes = {
    listInfo: PropTypes.array,
}
export default Breadcrumb;

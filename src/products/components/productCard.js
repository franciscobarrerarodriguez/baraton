import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = (props) => (
    <a href="#!" className="card product-card">
        <div className="card-header">
            <button className="btn btn-nothing" onClick={ props.handleAddToChart }>
                <FontAwesomeIcon icon="shopping-cart" />
            </button>
            <span className="card-price">$ price</span>
        </div>
        <div className="card-body">
            <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_x2_02_ad_l.jpg" alt="" />
        </div>
        <div className="card-footer">
            <span>lorem</span>
        </div>
    </a>
);

export default ProductCard;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ProductCard.scss';

const ProductCard = (props) => (
    <a href="#!" className="card product-card">
        <div className="card-header">
            <button className="btn btn-nothing" onClick={ () => { props.handleAddToChart(props.product.id) } }>
                <FontAwesomeIcon icon="shopping-cart" />
            </button>
            <span className="card-price">$ { props.product.price }</span>
        </div>
        <div className="card-body">
            {
                props.product.available === true &&
                <div className="available">
                    <label>No disponible</label>
                </div>
            }
            <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_x2_02_ad_l.jpg" alt="" />
        </div>
        <div className="card-footer">
            <span>{ props.product.name }</span>
        </div>
    </a>
);

export default ProductCard;
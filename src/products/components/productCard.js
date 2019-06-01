import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ProductCard.scss';

const ProductCard = (props) => (
    <a href="#!" className="card product-card">
        <div className="card-header">
            <button className="btn btn-nothing" onClick={ () => { props.handleAddToChart(props.product.id, props.product.price) } }>
                <FontAwesomeIcon icon="shopping-cart" />
            </button>
            <span className="card-price">$ { props.product.price }</span>
        </div>
        <div className="card-body">
            {
                props.product.available === false &&
                <div className="available">
                    <label>No disponible</label>
                </div>
            }
            <img src={ props.product.img } />
        </div>
        <div className="card-footer">
            <span>{ props.product.name }</span>
        </div>
    </a>
);

export default ProductCard;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StockQuantity = (props) => (
    <div className="filter-item">
        <label className="filter-item-head">Cantidad en stock</label>
        <div className="filter-item-body filter-group filter-group-quantity">
            <button onClick={ props.handleDecreaseStock }>
                <FontAwesomeIcon icon="minus" />
            </button>
            <label className="text-align text-align-center">
                {
                    props.stockQuantity > 0 ?
                    (props.stockQuantity) : ''
                }
            </label>
            <button onClick={ props.handleIncreaseStock }>
                <FontAwesomeIcon icon="plus" />
            </button>
        </div>
    </div>
)

export default StockQuantity;
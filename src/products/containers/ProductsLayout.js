import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from "../components/productCard";

import './ProductsLayout.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ProductsLayout extends Component {

    handleAddToChart = (productId, productPrice) => {
        this.props.dispatch({
            type: 'ADD_TO_SHOPPING_CHART',
            payload: {
                productId,
                productPrice
            }
        });
    }

    render() {
        return(
            <div className="col-75 grid-products">
                {
                    this.props.products.length > 0 ? (
                        this.props.products.map((product, index) => {
                            return <ProductCard handleAddToChart={ this.handleAddToChart } key={ index } product={ product }/>
                        })
                    ) : (
                        <div className="no-products">
                            <span>No hemos encontrado productos</span>
                            <FontAwesomeIcon icon="shopping-cart" className="nav-chart-icon" size="6x"/>
                        </div>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        products: state.filteredProducts
    }
}

export default connect(mapStateToProps)(ProductsLayout);
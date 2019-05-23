import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from "../components/productCard";

import './ProductsLayout.scss';

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
                    this.props.products &&
                        this.props.products.map((product, index) => {
                            return <ProductCard handleAddToChart={ this.handleAddToChart } key={ index } product={ product }/>
                        })
                }
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        products: state.data.products
    }
}

export default connect(mapStateToProps)(ProductsLayout);
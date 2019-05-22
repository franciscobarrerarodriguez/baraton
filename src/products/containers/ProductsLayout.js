import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from "../components/productCard";

import './ProductsLayout.scss';

import data from './products';

class ProductsLayout extends Component {

    state = {
        filteredProducts: {}
    }

    componentWillMount() {
        this.setState({ filteredProducts: data.products });
    }

    handleAddToChart = productId => {
        this.props.dispatch({
            type: 'ADD_TO_SHOPPING_CHART',
            payload: {
                query: productId
            }
        });
    }

    render() {
        return(
            <div className="col-75 grid-products">
                {
                    this.state.filteredProducts.map((product, index) => {
                        return <ProductCard handleAddToChart={ this.handleAddToChart } key={ index } product={ product }/>
                    })
                }
            </div>
        )
    }
}

export default connect()(ProductsLayout);
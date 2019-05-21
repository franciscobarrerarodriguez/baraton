import React, { Component } from 'react';
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

    handleAddToChart = (event) => {
        event.preventDefault();
        console.log("add To chart")
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

export default ProductsLayout;
import React, { Component } from 'react';
import ProductCard from "../components/productCard";

import './ProductsLayout.scss'

class ProductsLayout extends Component {

    handleAddToChart = (event) => {
        event.preventDefault();
        console.log("add To chart")
    }

    render() {
        return(
            <div className="col-8 grid-products">
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
                <ProductCard handleAddToChart={ this.handleAddToChart }/>
            </div>
        )
    }
}

export default ProductsLayout;
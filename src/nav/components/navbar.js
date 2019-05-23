import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import './navbar.scss';

class Navbar extends Component {

    state = {
        handleError: false
    }

    totalPrice = () => {
        if (this.props.shoppingChart.products) {
            let total = 0;
            this.props.shoppingChart.products.map(product => {
                product.price = product.price.replace(',','');
                return total = total + Number(product.price) * product.quantity;
            });
            return total;
        }
        return '';
    }

    totalItems = () => {
        if (this.props.shoppingChart.products) {
            let total = 0;
            this.props.shoppingChart.products.map(product => {
                return total = total + product.quantity;
            });
            return total;
        }
        return '';
    }

    render() {
        return(
            <nav className="navbar">
                <div className="container navbar-container">
                    <div className="navbar-brand">
                        <FontAwesomeIcon icon="cash-register" size="2x" />
                        <h1 className="brand-title">El Baratón</h1>
                    </div>
                    <div className="navbar-content">
                        <ul className="list list-none">
                            <li>
                                <button className="btn btn-nothing nav-chart">
                                    <span>($ { this.totalPrice() })</span>
                                    <FontAwesomeIcon icon="shopping-cart" className="nav-chart-icon"/>
                                    <span><b>{ this.totalItems() }</b></span>
                                    <FontAwesomeIcon icon="chevron-down"  className="nav-chart-icon"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        shoppingChart: state.shoppingChart
    }
}

export default connect(mapStateToProps)(Navbar);
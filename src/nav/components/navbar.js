import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import './navbar.scss';

class Navbar extends Component {

    state = {
        handleError: false
    }

    totalPrice = () => {
        total = 0;
        this.props.shoppingChart.products.map(product => {
            total = total + product.price;
        });
        return total;
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
                                    <span>{ this.props.shoppingChart.products.lenght } Items (${ this.totalPrice })</span>
                                    <FontAwesomeIcon icon="shopping-cart" className="nav-chart-icon"/>
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
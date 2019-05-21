import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navbar.scss';

class Navbar extends Component {

    state = {
        handleError: false
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
                                    <span>3 Items ($145)</span>
                                    <FontAwesomeIcon icon="shopping-cart"  className="nav-chart-icon"/>
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

export default Navbar;
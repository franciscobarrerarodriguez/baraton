import React, { Component } from 'react';
import Range from '../components/Range';
import StockQuantity from '../components/StockQuantity';
import Availability from '../components/Availability';
import Categories from '../components/Categories';

import './Filters.scss';

import data from './categories';

class FiltersLayout extends Component {

    state = {
        stockQuantity: 0,
        available: false,
        range: 50,
        categories: {},
        filteredCategories: {}
    }

    componentWillMount() {
        this.setState({ categories: data.categories });
    }

    handleChangeRange = event => {
        this.setState({ range: event.target.value });
    }

    handleIncreaseStock = () => {
        this.setState({stockQuantity: this.state.stockQuantity + 1});
    }

    handleDecreaseStock = () => {
        this.setState({ stockQuantity: this.state.stockQuantity > 0 ? this.state.stockQuantity - 1 : 0 });
    }

    handleToggleAvailability = event => {
        this.setState({ available: !this.state.available });
    }

    render() {
        return(
            <div className="filters">
                <div className="filter-row">
                    <Range handleChangeRange={ this.handleChangeRange }
                           range={ this.state.range }/>
                </div>
                <div className="filter-row">
                    <Categories categories={ this.state.categories }/>
                </div>
                <div className="filter-row">
                    <StockQuantity handleIncreaseStock={ this.handleIncreaseStock }
                                   handleDecreaseStock={ this.handleDecreaseStock }
                                   stockQuantity={ this.state.stockQuantity }/>
                </div>
                <div className="filter-row">
                    <Availability handleToggleAvailability={ this.handleToggleAvailability }
                                  available={ this.state.available }/>
                </div>
            </div>
        )
    }
}

export default FiltersLayout;
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Range from '../components/Range';
import StockQuantity from '../components/StockQuantity';
import Availability from '../components/Availability';
import Categories from '../components/Categories';

import './Filters.scss';

import data from './categories';

class FiltersLayout extends Component {

    state = {
        categories: {}
    }

    componentWillMount() {
        this.setState({ categories: data.categories });
        this.setState({ filters: this.props.filters })
    }

    componentDidUpdate() {
        this.props.dispatch({
            type: 'FILTER_PRODUCTS',
            payload: {
                ...this.state.filters
            }
        });
    }

    handleChangeRange = event => {
        this.setState({ filters: { ...this.state.filters, range: event.target.value } });
    }

    handleIncreaseStock = () => {
        this.setState({ filters: { ...this.state.filters, stockQuantity: this.state.filters.stockQuantity + 1 } });
    }

    handleDecreaseStock = () => {
        this.setState({ filters: { ...this.state.filters, stockQuantity: this.state.filters.stockQuantity > 0 ? this.state.filters.stockQuantity - 1 : 0 } });
    }

    handleToggleAvailability = event => {
        this.setState({ filters: { ...this.state.filters, available: !this.state.filters.available } });
    }

    handleChangeCategory = (sublevelId) => {
        this.setState({ filters: { ...this.state.filters, category: sublevelId } });
        this.props.dispatch({
            type: 'FILTER_BY_CATEGORY',
            payload: { category: sublevelId }
        });
    }

    render() {
        return(
            <div className="col-20">
                <div className="filters">
                    <div className="filter-row">
                        <Categories categories={ this.state.categories } handleChangeCategory={ this.handleChangeCategory }
                                    activeCategory={ this.state.filters.category }/>
                    </div>
                </div>
                <div className="filters">
                    <div className="filter-row">
                        <Range handleChangeRange={ this.handleChangeRange }
                               range={ this.state.filters.range }/>
                    </div>
                    <div className="filter-row">
                        <StockQuantity handleIncreaseStock={ this.handleIncreaseStock }
                                       handleDecreaseStock={ this.handleDecreaseStock }
                                       stockQuantity={ this.state.filters.stockQuantity }/>
                    </div>
                    <div className="filter-row">
                        <Availability handleToggleAvailability={ this.handleToggleAvailability }
                                      available={ this.state.filters.available }/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(FiltersLayout);
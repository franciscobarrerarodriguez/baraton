import React, { Component } from 'react';
import Subcategories from "./Subcategories";

class Categories extends Component {

    state = {
        categories: []
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({ categories: this.props.categories });
    }

    buildCategoryTree = (category, index) => {
        return (
            <li className="category-item" key={ index }>
                <a href="#!">{ category.name }</a>
                {
                    category.sublevels !== null &&
                        <Subcategories subcategories={ category.sublevels } handleChangeCategory={ this.props.handleChangeCategory }/>
                }
            </li>
        )
    }

    render() {
        return(
            <div className="filter-item">
                <label className="filter-item-head">Categories</label>
                <div className="filter-item-body">
                    <ul className="filter-group filter-categories no-margin no-margin-full no-padding no-padding-full list list-none">
                        {
                            this.state.categories.map((category, index) => {
                                return this.buildCategoryTree(category, index)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Categories;
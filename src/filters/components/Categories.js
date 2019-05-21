import React from 'react';

const Categories = props => (
    <div className="filter-item">
        <label className="filter-item-head">Categories</label>
        <div className="filter-item-body">
            <ul className="filter-group filter-categories no-margin no-margin-full no-padding no-padding-full list list-none">
                <li className="category-item">
                    <a href="#!">Categoria 1</a>
                    <ul className="no-margin no-margin-full no-padding no-padding-full list list-none subcategory-list">
                        <li className="subcategory-item">
                            <a href="#!">SubCategory 1</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
)

export default Categories;
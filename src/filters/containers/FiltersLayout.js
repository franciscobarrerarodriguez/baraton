import React, { Component } from 'react';

import './Filters.scss';

class FiltersLayout extends Component {
    render() {
        return(
            <div className="filters">
                <div className="filter-row">
                    <div>
                        <label htmlFor="">
                            Price
                        </label>
                        <input type="range" />
                    </div>
                </div>
                <div className="filter-row">
                    <ul className="categories">
                        <li>
                            <span>Categoria 1</span>
                            <ul>
                                <li>subcategoria 1</li>
                                <li>subcategoria 2</li>
                            </ul>
                        </li>
                        <li>
                            <span>Categoria 1</span>
                            <ul>
                                <li>subcategoria 1</li>
                                <li>subcategoria 2</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="filter-row">
                    <div>
                        <label htmlFor="">Cantidad en stock</label>
                        <div className="">
                            <button>-</button>
                            <label htmlFor="">52</label>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="filter-row">
                    <div>
                        <label htmlFor="">Disponibilidad</label>
                        <input type="checkbox"/><span>Disponible</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FiltersLayout;
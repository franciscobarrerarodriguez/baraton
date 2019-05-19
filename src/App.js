import React from 'react';
import './App.scss';

import Navbar from './nav/components/navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import HandleError from "./errors/containers/handleError";

library.add(faCashRegister, faShoppingCart, faChevronDown);

function App() {
  return (
      <HandleError>
        <div className="rappicommerce">
          <Navbar />
          <div className="rappicommerce-content">
            <div className="banner">
              <div className="banner-content color white-color">
                <h1 className="no-margin no-margin-top text-align text-align-center">Kitchen & Bar</h1>
                <h4 className="no-margin no-margin-bottom text-align text-align-center">564 Items</h4>
              </div>
            </div>
            <div className="row center-row">
              <div className="container flex-container">
                <div className="col-4">
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
                </div>
                <div className="col-8 grid-products">
                  <a href="#!" className="card product-card">
                    <div className="card-header">
                      <button className="btn btn-nothing">
                        <FontAwesomeIcon icon="shopping-cart" />
                      </button>
                      <span className="card-price">$ price</span>
                    </div>
                    <div className="card-body">
                      <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_x2_02_ad_l.jpg" alt="" />
                    </div>
                    <div className="card-footer">
                      <span>lorem</span>
                    </div>
                  </a>
                  <a href="#!" className="card product-card">
                    <div className="card-header">
                      <button className="btn btn-nothing">
                        <FontAwesomeIcon icon="shopping-cart" />
                      </button>
                      <span className="card-price">$ price</span>
                    </div>
                    <div className="card-body">
                      <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_x2_02_ad_l.jpg" alt="" />
                    </div>
                    <div className="card-footer">
                      <span>lorem</span>
                    </div>
                  </a>
                  <a href="#!" className="card product-card">
                    <div className="card-header">
                      <button className="btn btn-nothing">
                        <FontAwesomeIcon icon="shopping-cart" />
                      </button>
                      <span className="card-price">$ price</span>
                    </div>
                    <div className="card-body">
                      <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_x2_02_ad_l.jpg" alt="" />
                    </div>
                    <div className="card-footer">
                      <span>lorem</span>
                    </div>
                  </a>
                  <a href="#!" className="card product-card">
                    <div className="card-header">
                      <button className="btn btn-nothing">
                        <FontAwesomeIcon icon="shopping-cart" />
                      </button>
                      <span className="card-price">$ price</span>
                    </div>
                    <div className="card-body">
                      <img src="https://www.powerplanetonline.com/cdnassets/smartwatch_x2_02_ad_l.jpg" alt="" />
                    </div>
                    <div className="card-footer">
                      <span>lorem</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer className="main-footer">
            <div className="row center-row">
              <div className="container">
                <h5>Francisco Javier barrera</h5>
              </div>
            </div>
          </footer>
        </div>
      </HandleError>
  );
}

export default App;

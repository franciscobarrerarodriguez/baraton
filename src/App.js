import React from 'react';
import './App.scss';

import Navbar from './nav/components/navbar';
import ProductsLayout from './products/containers/ProductsLayout';
import FiltersLayout from './filters/containers/FiltersLayout';
import Banner from './banner/components/Banner';

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
            <Banner/>
            <div className="row center-row">
              <div className="container flex-container">
                <div className="col-4">
                  <FiltersLayout />
                </div>
                <ProductsLayout />
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

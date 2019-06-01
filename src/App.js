import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.scss';

import Navbar from './nav/components/navbar';
import ProductsLayout from './products/containers/ProductsLayout';
import FiltersLayout from './filters/containers/FiltersLayout';
import Banner from './banner/components/Banner';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCashRegister, faShoppingCart, faChevronDown, faPlus, faMinus, faArchive } from '@fortawesome/free-solid-svg-icons';
import HandleError from "./errors/containers/handleError";

import products from './reducers/products';
import data from './products/containers/products'

library.add(faCashRegister, faShoppingCart, faChevronDown, faPlus, faMinus, faArchive);

const initialState = {
  allProducts: data.products,
  filteredProducts: data.products,
  shoppingChart: localStorage.getItem('shoppingChart') ? JSON.parse(localStorage.getItem('shoppingChart')) : {products: []},
  filters: {
    stockQuantity: 0,
    available: true,
    range: 25000,
    category: undefined
  }
}

console.log(initialState)

const store = createStore(
    products,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  return (
      <HandleError>
        <Provider store={ store }>
          <div className="rappicommerce">
            <Navbar />
            <div className="rappicommerce-content">
              <Banner/>
              <div className="row center-row">
                <div className="container flex-container flex-space-between">
                  <FiltersLayout/>
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
        </Provider>
      </HandleError>
  )
}

export default App;

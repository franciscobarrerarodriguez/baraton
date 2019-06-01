function products(state, action) {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_CHART': {
            if (!localStorage.getItem('shoppingChart')) {
                localStorage.setItem('shoppingChart', JSON.stringify({products: []}));
            }
            let shoppingChart = JSON.parse(localStorage.getItem('shoppingChart'));
            let products = shoppingChart.products.filter(product => {
                if (product.id === action.payload.productId) {
                    product.quantity = product.quantity + 1;
                    return true;
                }
                return false;
            });
            if (!products[0]) {
                shoppingChart.products.push({id: action.payload.productId, quantity: 1, price: action.payload.productPrice});
            } 
            localStorage.setItem('shoppingChart', JSON.stringify(shoppingChart));
            return {
                ...state,
                shoppingChart: shoppingChart
            }
        }
        case 'FILTER_PRODUCTS': {
            console.log(action.payload)
            let results = [];
            if (action.payload.category !== undefined) {
                results = state.allProducts.filter(product => {
                    return product.available === action.payload.available
                        && product.quantity >= action.payload.stockQuantity
                        && Number(product.price.replace(/,/g, '')) <= action.payload.range
                        && action.payload.category === product.sublevel_id;
                });
            } else {
                results = state.allProducts.filter(product => {
                    return product.available === action.payload.available
                        && product.quantity >= action.payload.stockQuantity
                        && Number(product.price.replace(/,/g, '')) <= action.payload.range;
                });
            }
            return {
                ...state,
                filteredProducts: results
            }
        }
        case 'FILTER_BY_CATEGORY': {
            let results = [];
            results = state.allProducts.filter(product => {
                return action.payload.category === product.sublevel_id;
            });
            return {
                ...state,
                filteredProducts: results,
                filters: { ...state.filters, category: action.payload.category }
            }
        }
        default:
            return state;
    }
}

export default products;
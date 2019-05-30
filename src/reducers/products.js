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
            let results = [];
            if (action.payload.available || action.payload.stockQuantity || action.payload.category || action.payload.range) {
                const list = state.data.products;
                results = list.filter(product => {
                    return product.available === action.payload.available
                        && product.quantity >= action.payload.stockQuantity
                        && action.payload.category === product.sublevel_id
                        && Number(product.price.replace(',','')) <= action.payload.range;
                });
            }
            return {
                ...state,
                data: { products: results }
            }
        }
        case 'FILTER_BY_CATEGORY': {
            let results = [];
            const list = state.data.products;
            results = list.filter(product => {
                return action.payload.category === product.sublevel_id;
            });
            return {
                ...state,
                data: { products: results }
            }
        }
        default:
            return state;
    }
}

export default products;
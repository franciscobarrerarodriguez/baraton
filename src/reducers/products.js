function products(state, action) {
    switch (action.type) {
        case 'ADD_TO_SHOPPING_CHART': {
            if (!sessionStorage.getItem('shoppingChart')) {
                sessionStorage.setItem('shoppingChart', JSON.stringify({products: []}));
            }
            let shoppingChart = JSON.parse(sessionStorage.getItem('shoppingChart'));
            let products = shoppingChart.products.filter(product => {
                if (product.id === action.payload.productId) {
                    product.quantity = product.quantity + 1;
                    return true;
                }
            });
            if (!products[0]) {
                shoppingChart.products.push({id: action.payload.productId, quantity: 1, price: action.payload.productPrice});
            } 
            sessionStorage.setItem('shoppingChart', JSON.stringify(shoppingChart));
            return {
                ...state,
                shoppingChart: shoppingChart
            }
        }
        case 'FILTER_PRODUCTS': {
            let results = [];
            if (action.payload.range) {
                const list = state.data.products;
                results = list.filter(product => {
                    return product.price < action.payload.range;
                });
            }
            return {
                ...state,
                search: results
            }
        }
        default:
            return state;
    }
}

export default products;
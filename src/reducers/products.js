function products(state, action) {
    switch (action.type) {
        case "ADD_TO_SHOPPING_CHART": {
            if (!sessionStorage.getItem('shoppingChart')) {
                sessionStorage.setItem('shoppingChart', JSON.stringify(new Array()));
            }
            let shoppingChart = JSON.parse(sessionStorage.getItem('shoppingChart'));
            shoppingChart.push(action.payload.query);
            sessionStorage.setItem('shoppingChart', JSON.stringify(shoppingChart));
            return {
                ...state,
                shoppingChart: []
            }
        }
        default:
            return state;
    }
}

export default products;
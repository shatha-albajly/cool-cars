import { configureStore } from '@reduxjs/toolkit';
import products_reducer from './reducers/products_reducer';
import filter_reducer from './reducers/filter_reducer';


const store = configureStore({
    reducer: {
        products: products_reducer,
        filters: filter_reducer,
    },
});


export default store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        model: 'all',
        status: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
    },
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        loadProducts(state, action) {
            let maxPrice = Math.max(...action.payload.map((p) => p.price));
            state.all_products = action.payload;
            state.filtered_products = action.payload;
            state.filters.max_price = maxPrice;
            state.filters.price = maxPrice;
        },
        setGridView(state) {
            state.grid_view = true;
        },
        setListView(state) {
            state.grid_view = false;
        },
        updateSort(state, action) {
            state.sort = action.payload;
        },
        sortProducts(state) {
            let tempProducts = [...state.filtered_products];
            if (state.sort === 'price-lowest') {
                tempProducts.sort((a, b) => a.price - b.price);
            }
            if (state.sort === 'price-highest') {
                tempProducts.sort((a, b) => b.price - a.price);
            }
            if (state.sort === 'name-a') {
                tempProducts.sort((a, b) => a.name.localeCompare(b.name));
            }
            if (state.sort === 'name-z') {
                tempProducts.sort((a, b) => b.name.localeCompare(a.name));
            }
            state.filtered_products = tempProducts;
        },
        updateFilters(state, action) {
            const { name, value } = action.payload;
            state.filters[name] = value;
        },
        filterProducts(state) {
            const { all_products } = state;
            const { text, model, company, status, price } = state.filters;
            let tempProducts = [...all_products];
            if (text) {
                tempProducts = tempProducts.filter((product) =>
                    product.name.toLowerCase().startsWith(text)
                );
            }
            if (model !== 'all') {
                tempProducts = tempProducts.filter((product) => product.model === model);
            }
            if (company !== 'all') {
                tempProducts = tempProducts.filter((product) => product.company === company);
            }
            if (status !== 'all') {
                tempProducts = tempProducts.filter((product) => product.status === status);
            }
            tempProducts = tempProducts.filter((product) => product.price <= price);
            state.filtered_products = tempProducts;
        },
        clearFilters(state) {
            state.filters = {
                text: '',
                company: 'all',
                model: 'all',
                status: 'all',
                price: state.filters.max_price,
            };
        },
    },
});

export const {
    loadProducts,
    setGridView,
    setListView,
    updateSort,
    sortProducts,
    updateFilters,
    filterProducts,
    clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;

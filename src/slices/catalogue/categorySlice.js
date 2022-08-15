import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './apis';

/**
 * Initial categorySlice State 
 */
const initialState = {
    value: [],
    selected: null,
    status: 'idle',
};

/**
 * Function to handle the async request to fetch the categories from the server
 */
export const fetchCategoriesAsync = createAsyncThunk(
    'category/fetchCategories',
    async () => {
        const response = await fetchCategories();
        return response.data;
    }
);


/**
 * Creating categorySlice to handle the categories state
 */
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        select: (state, action) => {
            state.selected = action.payload.category;
        },
    },
    // lets handle actions generated by createAsyncThunk or in other slices.
    // with the extra reducers
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesAsync.pending, (state) => {
                state.status = 'fetching';
            })
            .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            });
    },
});


/**
 * Exporting the actions from the categorySlice
 */
export const { select } = categorySlice.actions;

/**
 * This will be used to select the value from the state in the component using the useSelector hook
 * @param {*} state 
 * @returns 
 */
export const selectCategories = (state) => state.category.value;
export const selectSelectedCategory = (state) => state.category.selected;
export const selectCategoryLoadingStatus = (state) => state.category.status;

/**
 * FInally Exporting the reducer from the categorySlice
 */
export default categorySlice.reducer;

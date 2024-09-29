// src/redux/actions/productActions.js
import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const APPEND_PRODUCTS = 'APPEND_PRODUCTS';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_CATEGORY = 'SET_CATEGORY';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'; // Make sure this is added

// Fetch Products Action Creator
export const fetchProducts = (category = '', search = '', skip = 0, limit = 10, append = false) => async (dispatch) => {
  let url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;

  if (category) {
    url = `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=${limit}`;
  }

  if (search) {
    url += `&q=${search}`;
  }

  try {
    const response = await axios.get(url);
    if (append) {
      dispatch({ type: APPEND_PRODUCTS, payload: response.data.products });
    } else {
      dispatch({ type: FETCH_PRODUCTS, payload: response.data.products });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Fetch Categories Action Creator
export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products/categories');
    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

// Set Search Query Action Creator
export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

// Set Category Action Creator
export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category,
});

// src/redux/reducers/productReducer.js
import { FETCH_PRODUCTS, APPEND_PRODUCTS, SET_SEARCH_QUERY, SET_CATEGORY, FETCH_CATEGORIES } from '../actions/productActions';

const initialState = {
  categories: [],
  products: [],
  searchQuery: '',
  selectedCategory: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };  // Replace products
    case APPEND_PRODUCTS:
      return { ...state, products: [...state.products, ...action.payload] };  // Append products for pagination
    case FETCH_CATEGORIES:
      return { ...state, categories: action.payload };  // Fetch categories
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload, products: [] };  // Reset products when category changes
    default:
      return state;
  }
};

export default productReducer;

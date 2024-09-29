// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, fetchProducts } from '../redux/actions/productActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const selectedCategory = useSelector((state) => state.productData.selectedCategory);

  // Debounce search functionality: only dispatch after user stops typing for 500ms
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(setSearchQuery(searchText));
      dispatch(fetchProducts(selectedCategory, searchText)); // Fetch products based on the query and category
    }, 500);

    return () => clearTimeout(delayDebounceFn); // Cleanup the timeout if user types again quickly
  }, [searchText, dispatch, selectedCategory]);

  const handleSearch = (e) => {
    setSearchText(e.target.value); // Update search text
  };

  return (
    <input
      type="text"
      value={searchText}
      placeholder="Search products..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

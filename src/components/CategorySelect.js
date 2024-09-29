// src/components/CategorySelect.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategory, fetchProducts } from '../redux/actions/productActions';

const CategorySelect = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productData.categories);
  const selectedCategory = useSelector((state) => state.productData.selectedCategory);
  const searchQuery = useSelector((state) => state.productData.searchQuery);

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories on component mount
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    dispatch(setCategory(category)); // Update selected category in Redux store
    dispatch(fetchProducts(category, searchQuery)); // Fetch products based on selected category
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.slug} value={category.slug}> {/* Use category.slug for value */}
          {category.name}  {/* Display category name */}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;

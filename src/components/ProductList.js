// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, selectedCategory, searchQuery } = useSelector((state) => state.productData);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory, searchQuery, 0, 10, false)); // Fetch initial products
    setSkip(10); // Initialize skip for loading more
  }, [dispatch, selectedCategory, searchQuery]);

  const loadMore = () => {
    dispatch(fetchProducts(selectedCategory, searchQuery, skip, 10, true)); // Fetch more products
    setSkip(skip + 10); // Increase skip value
  };

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <button className="load-more" onClick={loadMore}>Load More</button> {/* Apply CSS class here */}
    </div>
  );
};

export default ProductList;

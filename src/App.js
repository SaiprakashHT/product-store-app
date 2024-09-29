// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CategorySelect from './components/CategorySelect';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product Store</h1>
        <SearchBar />
        <CategorySelect />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;

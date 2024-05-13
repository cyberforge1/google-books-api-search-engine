// HomePage.jsx


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

const HomePage = () => {
  let navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    navigate('/search', { state: { query: searchQuery } });
  };

  return (
    <div className="home-page">
      <Header title="Google Books API Search Engine" />
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default HomePage;
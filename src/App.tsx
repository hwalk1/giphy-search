import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="title">GiphySearch</h1>
      </header>
      <SearchBar onSearch="" isLoading={false} />
    </div>
  );
}

export default App;

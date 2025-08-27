import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import { GifGrid } from './components/GifGrid';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  const getGif = async (searchTerm: string) => {
    setIsLoading(true);
    console.log(searchTerm);
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          // eslint-disable-next-line camelcase
          api_key: API_KEY,
          q: searchTerm,
          limit: 20,
          rating: 'g',
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1 className="title">GiphySearch</h1>
      </header>
      <SearchBar
        onSearch={(searchTerm) => getGif(searchTerm)}
        isLoading={false}
      />
      <GifGrid gifs={gifs} isLoading={isLoading} />
    </div>
  );
}

export default App;

import Input from './ui/input';
import Button from './ui/button';
import './SearchBar.css';
import { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="container">
        <Input
          type="text"
          placeholder="Search for GIFs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchBar;

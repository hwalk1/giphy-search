import Input from './ui/input';
import { useState } from 'react';

interface SearchHeaderProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Input
        type="text"
        placeholder="Search for GIFs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

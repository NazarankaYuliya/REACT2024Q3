import { Character } from '../types/Character';
import { fetchItems } from '../services/apiService';
import useSearchQuery from '../hooks/useSearchQuery';
import { useEffect, useCallback } from 'react';
import ErrorButton from './ErrorButton';

interface SearchProps {
  updateResults: (results: Character[]) => void;
  setLoading: (isLoading: boolean) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setTotalPages: (totalPages: number) => void;
}

const Search: React.FC<SearchProps> = ({
  updateResults,
  setLoading,
  currentPage,
  setCurrentPage,
  setTotalPages,
}) => {
  const [searchItem, setSearchItem] = useSearchQuery();

  const handleSearch = useCallback(
    async (page: number) => {
      setLoading(true);

      try {
        const { results, info } = await fetchItems(searchItem, page);
        updateResults(results);
        setTotalPages(info.pages);
      } catch (error) {
        updateResults([]);
      } finally {
        setLoading(false);
      }
    },
    [searchItem, setLoading, updateResults, setTotalPages],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedSearchItem = e.target.value.trim();
    setSearchItem(trimmedSearchItem);
  };

  const handleButtonSearch = () => {
    setCurrentPage(1);
    handleSearch(1);
  };

  useEffect(() => {
    handleSearch(currentPage);
  }, [currentPage]);

  return (
    <div className="search">
      <ErrorButton />
      <input
        type="text"
        placeholder="Enter character name"
        value={searchItem}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonSearch}>Search</button>
    </div>
  );
};

export default Search;

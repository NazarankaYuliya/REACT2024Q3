import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import { Character } from './types/Character';
import './App.css';
import PageNotFound from './components/PageNotFound';

const App = () => {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const updateResults = (results: Character[]) => {
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <div className="app">
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Search
                  updateResults={updateResults}
                  setLoading={handleLoading}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setTotalPages={setTotalPages}
                />
                <Results
                  results={searchResults}
                  isLoading={isLoading}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;

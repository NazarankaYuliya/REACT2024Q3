import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Results from '../components/Results';
import Search from '../components/Search';
import { Character } from '../types/Character';
import ErrorBoundary from '../components/ErrorBoundary';
import { useNavigate, useParams } from 'react-router-dom';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { id } = useParams();

  const navigate = useNavigate();

  const updateResults = (results: Character[]) => {
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  useEffect(() => {
    if (id) {
      navigate(`?page=${currentPage}&details=${id}`);
    } else navigate(`?page=${currentPage}`);
  }, [navigate, currentPage]);

  return (
    <>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </>
  );
};

export default HomePage;

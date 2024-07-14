import { Character } from '../types/Character';
import CharacterCard from './CharacterCard';
import NotFound from './CharacterNotFound';
import Pagination from './Pagination';

interface ResultsProps {
  results: Character[];
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
}

const Results: React.FC<ResultsProps> = ({
  results,
  isLoading,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (results.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      <div className="results">
        <button></button>
        {results.map((character) => (
          <div key={character.id} className="card">
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;

import { Outlet, useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { id } = useParams();

  const onClick = (id: number) => {
    navigate(`${id}/?page=${currentPage}&details=${id}`);
  };

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (results.length === 0) {
    return <NotFound />;
  }

  const closeDetails = () => {
    if (id) navigate('/');
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      <div className="results">
        <div className="leftSide" onClick={closeDetails}>
          {results.map((character) => (
            <div key={character.id} className="card">
              <CharacterCard character={character} onClick={onClick} />
            </div>
          ))}
        </div>
        <div className="rightSide" style={{ display: id ? 'block' : 'none' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Results;

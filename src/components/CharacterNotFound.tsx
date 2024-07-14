import React from 'react';
import useSearchQuery from '../hooks/useSearchQuery';

const CharacterNotFound: React.FC = () => {
  const [searchItem, setSearchItem] = useSearchQuery();

  const handleReturnButtonClick = () => {
    setSearchItem('');
    window.location.reload();
  };

  return (
    <div className="not-found">
      <p className="not-found-message">
        No characters found for "{searchItem}"
      </p>
      <p className="not-found-suggestion">
        Try changing your search term or go back to the main page.
      </p>
      <button className="return-button" onClick={handleReturnButtonClick}>
        Return to Search
      </button>
    </div>
  );
};

export default CharacterNotFound;

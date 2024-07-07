import { Component } from 'react';
import { Character } from '../types/Character';
import CharacterCard from './CharacterCard';
import NotFound from './NotFound';

interface ResultsProps {
  results: Character[];
  isLoading: boolean;
}

class Results extends Component<ResultsProps> {
  render() {
    const { results, isLoading } = this.props;

    if (isLoading) {
      return <p className="loading">Loading...</p>;
    }

    if (results.length === 0) {
      return <NotFound />;
    }

    return (
      <div className="results">
        {results.map((character) => (
          <div key={character.id} className="card">
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
    );
  }
}

export default Results;

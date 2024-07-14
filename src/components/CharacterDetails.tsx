import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character } from '../types/Character';
import { fetchCharacterData } from '../services/apiService';

export default function CharacterDetails() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const closeDetails = () => {
    navigate('/');
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetchCharacterData(+id)
        .then((data: Character) => {
          setCharacterData(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  return (
    <div className="character-details-container">
      {isLoading ? (
        <h2 className="loading">Loading details...</h2>
      ) : (
        <div className="character-details">
          <button onClick={closeDetails} className="close-button">
            &times;
          </button>
          <div className="detail-card">
            {characterData && (
              <>
                <img
                  src={characterData.image}
                  alt={characterData.name}
                  className="detail-image"
                />
                <h2 className="detail-name">{characterData.name}</h2>
                <p className="detail-info">
                  <strong>Status:</strong> {characterData.status}
                </p>
                <p className="detail-info">
                  <strong>Species:</strong> {characterData.species}
                </p>
                <p className="detail-info">
                  <strong>Type:</strong> {characterData.type || 'N/A'}
                </p>
                <p className="detail-info">
                  <strong>Gender:</strong> {characterData.gender}
                </p>
                <p className="detail-info">
                  <strong>Origin:</strong> {characterData.origin.name}
                </p>
                <p className="detail-info">
                  <strong>Location:</strong> {characterData.location.name}
                </p>
                <p className="detail-info">
                  <strong>Episodes:</strong> {characterData.episode.length}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

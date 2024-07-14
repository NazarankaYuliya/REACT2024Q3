import React from 'react';
import { Character } from '../types/Character';

interface CharacterCardProps {
  character: Character;
  onClick: (id: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onClick,
}) => {
  const handleCardClick = () => {
    onClick(character.id);
  };

  return (
    <div className="character-card" onClick={handleCardClick}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <button></button>
    </div>
  );
};

export default CharacterCard;

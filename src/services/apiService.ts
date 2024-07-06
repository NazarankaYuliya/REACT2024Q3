import { Character } from '../types/Character';

export const fetchItems = async (
  searchTerm: string = '',
): Promise<Character[]> => {
  const url = searchTerm
    ? `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    : 'https://rickandmortyapi.com/api/character';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        return [];
      } else {
        throw new Error('Failed to fetch items');
      }
    }

    const data = await response.json();
    return data.results as Character[];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

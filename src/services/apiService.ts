import { Character } from '../types/Character';

interface FetchItemsResponse {
  results: Character[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export const fetchItems = async (
  searchTerm: string = '',
  page: number,
): Promise<FetchItemsResponse> => {
  const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        return {
          results: [],
          info: { count: 0, pages: 0, next: null, prev: null },
        };
      } else {
        throw new Error('Failed to fetch items');
      }
    }

    const data = await response.json();
    return {
      results: data.results as Character[],
      info: {
        count: data.info.count,
        pages: data.info.pages,
        next: data.info.next,
        prev: data.info.prev,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      results: [],
      info: { count: 0, pages: 0, next: null, prev: null },
    };
  }
};

export const fetchCharacterData = async (id: number): Promise<Character> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred while fetching character data:', error);
    throw error;
  }
};

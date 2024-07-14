import { useState, useEffect } from 'react';

const useSearchQuery = () => {
  const [searchItem, setSearchItem] = useState(() => {
    return localStorage.getItem('searchTerm') || '';
  });

  useEffect(() => {
    if (searchItem === '') {
      localStorage.removeItem('searchTerm');
    } else {
      localStorage.setItem('searchTerm', searchItem);
    }
  }, [searchItem]);

  return [searchItem, setSearchItem] as const;
};

export default useSearchQuery;

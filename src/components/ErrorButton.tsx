import { useState } from 'react';

const ErrorButton = () => {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Error from button');
  }

  return (
    <button className="error-button" onClick={handleClick}>
      Portal gun, go!
    </button>
  );
};

export default ErrorButton;

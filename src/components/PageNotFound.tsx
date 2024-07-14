import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  return (
    <div className="not-found">
      <p className="not-found-message">Page not found.</p>

      <Link className="return-button" to="/">
        Go to Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;

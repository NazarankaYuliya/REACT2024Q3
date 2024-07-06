import { Component } from 'react';

class NotFound extends Component {
  handleReturnButtonClick = () => {
    localStorage.removeItem('searchTerm');
    window.location.reload();
  };

  render() {
    return (
      <div className="results">
        <p className="not-found">No characters found.</p>
        <p className="not-found-suggestion">
          Try changing your search term or go back to the main page.
        </p>
        <button
          className="return-button"
          onClick={this.handleReturnButtonClick}
        >
          Return to Search
        </button>
      </div>
    );
  }
}

export default NotFound;

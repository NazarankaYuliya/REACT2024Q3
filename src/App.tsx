import { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import { Character } from './types/Character';
import './App.css';

class App extends Component {
  state = {
    searchResults: [],
    isLoading: false,
  };

  updateResults = (results: Character[]) => {
    this.setState({ searchResults: results, isLoading: false });
  };

  handleLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  handleReturnToSearch = () => {
    this.setState({ searchResults: [], isLoading: false });
  };

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Header />
          <Search
            updateResults={this.updateResults}
            setLoading={this.handleLoading}
          />
          <Results
            results={this.state.searchResults}
            isLoading={this.state.isLoading}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;

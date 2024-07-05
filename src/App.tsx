import { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <ErrorButton />
          <Header />
          <Search />
          <Results />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;

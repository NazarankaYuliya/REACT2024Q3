import './App.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './components/PageNotFound';
import CharacterDetails from './components/CharacterDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}>
        <Route path=":id" element={<CharacterDetails />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

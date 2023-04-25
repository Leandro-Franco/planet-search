import './App.css';
import Home from './pages/Home';
import FilterProvider from './context/FilterProvider';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <FilterProvider>
        <Home />
      </FilterProvider>
    </PlanetProvider>
  );
}

export default App;

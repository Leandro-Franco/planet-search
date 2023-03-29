import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetData, setPlanetData] = useState([]);

  const fetchApi = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    console.log(data);
    const dataApi = data.results.map((col) => {
      delete col.residents;
      return col;
    });
    return dataApi;
  };

  useEffect(() => {
    fetchApi().then((dataApi) => setPlanetData(dataApi));
  }, []);

  const values = {
    planetData,
  };
  console.log(planetData);
  return (
    <PlanetContext.Provider value={ { values } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planetData, dataFilter, setDataFilter } = useContext(PlanetContext).values;
  console.log(planetData);
  const { nameInput, buttonInput } = useContext(FilterContext).values;
  const dataTh = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  const filteredArray = () => {
    const column = buttonInput[0];
    const operator = buttonInput[1];
    const value = buttonInput[2];
    if (operator === 'maior que') {
      const filtered = dataFilter.filter((planets) => planets[column] > value);
      setDataFilter(filtered);
    }
    if (operator === 'menor que') {
      const filtered = dataFilter.filter((planets) => planets[column] < value);
      setDataFilter(filtered);
    }
    if (operator === 'igual') {
      const filtered = dataFilter.filter((planets) => planets[column] === value);
      setDataFilter(filtered);
    }
    return dataFilter;
  };
  console.log(filteredArray());

  const newArray = filteredArray().filter((planet) => {
    if (nameInput === '') {
      return planet.name.toLowerCase().includes(nameInput);
    }
    return planet.name.toLowerCase().includes(nameInput);
  });

  // useEffect(() => {
  //   setData(planetData);
  // }, [buttonInput]);

  return (
    <table>
      <thead>
        <tr>
          { dataTh.map((th) => (
            <th key={ th }>{ th }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          newArray.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;

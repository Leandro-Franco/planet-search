import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planetData } = useContext(PlanetContext).values;
  const { nameInput } = useContext(FilterContext).values;
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

  const newArray = planetData.filter((planet) => {
    if (nameInput === '') {
      return planet
        .name.toLowerCase().includes(nameInput);
    }

    return planet
      .name.toLowerCase().includes(nameInput);
  });

  useEffect(() => {
  }, [nameInput, planetData]);

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
import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import PlanetContext from '../context/PlanetContext';
import './Form.css';

function Form() {
  const {
    dataFilter,
    setDataFilter,
    planetData } = useContext(PlanetContext);
  const {
    setNameInput,
    selColumnInput,
    setSelColumnInput,
    selOperatorInput,
    setSelOperatorInput,
    setQuantityInput,
    quantityInput,
    setGetFilter,
    getFilter,
    setRemoveFilter,
    removeFilter,
  } = useContext(FilterContext);
  const dataCol = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dataOpe = [
    'maior que',
    'menor que',
    'igual a',
  ];

  function handleChange({ target }) {
    const { value } = target;
    return value;
  }

  function setfilter() {
    const filteredArray = () => {
      const column = selColumnInput;
      const operator = selOperatorInput;
      const value = quantityInput;
      if (operator === 'maior que') {
        return dataFilter.filter((planets) => Number(planets[column]) > Number(value));
      }
      if (operator === 'menor que') {
        return dataFilter.filter((planets) => Number(planets[column]) < Number(value));
      }
      if (operator === 'igual a') {
        return dataFilter.filter((planets) => Number(planets[column]) === Number(value));
      }
    };
    return filteredArray;
  }

  function toRemove() {
    const column = selColumnInput;
    const operator = selOperatorInput;
    const value = quantityInput;

    return setRemoveFilter(removeFilter.concat([`${column} ${operator} ${value}`]));
  }

  function removing(idx) {
    const idxWord = removeFilter.filter((row, i) => i === idx);
    const removeWord = idxWord.map((remove) => remove.split(' ')[0]);
    const newFilter = getFilter.filter((el) => !removeWord.includes(el));

    setRemoveFilter(removeFilter.filter((row, i) => i !== idx));
    setGetFilter(newFilter);
  }

  // function filterAtt(idx) {
  //   const idxWord = removeFilter.filter((row, i) => i !== idx);

  //   return idxWord.forEach((params) => {
  //     const column = params.split(' ')[0];
  //     const removeWord1 = params.split(' ')[1];
  //     const removeWord2 = params.split(' ')[2];
  //     const operator = `${removeWord1} ${removeWord2}`;
  //     const value = params.split(' ')[3];
  //     console.log(planetData);
  //     console.log(column);
  //     console.log(operator);
  //     console.log(value);
  //     if (operator === 'maior que') {
  //       return planetData
  //         .filter((planets) => Number(planets[column]) > Number(value));
  //     }
  //     if (operator === 'menor que') {
  //       return planetData
  //         .filter((planets) => Number(planets[column]) < Number(value));
  //     }
  //     if (operator === 'igual a') {
  //       return planetData
  //         .filter((planets) => Number(planets[column]) === Number(value));
  //     }
  //   });
  // }

  return (
    <>
      <header>
        <label htmlFor="name">Projeto Star Wars - Trybe </label>
        <p>
          <input
            type="text"
            id="name"
            data-testid="name-filter"
            name="name"
            onChange={ (e) => setNameInput(handleChange(e).toLowerCase()) }
          />
        </p>
      </header>

      <div>
        <label htmlFor="column" className="child">coluna:</label>
        <select
          id="column"
          data-testid="column-filter"
          name="column"
          className="child"
          onChange={ (e) => setSelColumnInput(handleChange(e).toLowerCase()) }
        >
          {/* https://www.geeksforgeeks.org/how-to-get-the-elements-of-one-array-which-are-not-present-in-another-array-using-javascript/ */}
          { dataCol.filter((column) => !getFilter.includes(column)).map((col) => (
            <option key={ col } className="child">{col}</option>
          ))}
        </select>
        <label htmlFor="operator" className="child">Operador:</label>
        <select
          id="operator"
          data-testid="comparison-filter"
          name="operator"
          className="child"
          onChange={ (e) => setSelOperatorInput(handleChange(e)) }
        >
          { dataOpe.map((ope) => (
            <option key={ ope } className="child">{ope}</option>
          ))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="quantity"
          className="child"
          value={ quantityInput }
          onChange={ (e) => setQuantityInput(handleChange(e)) }
        />
        <input
          type="button"
          data-testid="button-filter"
          value="filtrar"
          name="filtrar"
          className="child"
          onClick={ () => {
            setGetFilter(getFilter.concat(selColumnInput));
            setDataFilter(setfilter());
            toRemove();
          } }
        />
        <label htmlFor="ordenar" className="child">ordenar:</label>
        <select id="ordenar" name="selSort" className="child">
          <option className="child">populationOrder</option>
        </select>
        <fieldset className="child options">

          <section>
            <input
              type="radio"
              id="descendente"
              name="sort"
              value="descendente"
              data-testid="column-sort-input-desc"
            />
            <label htmlFor="descendente" className="child">Descendente</label>
          </section>
          <section>
            <input
              type="radio"
              id="ascendente"
              name="sort"
              value="ascendente"
              data-testid="column-sort-input-asc"
            />
            <label htmlFor="ascendente" className="child">Ascendente</label>

          </section>

        </fieldset>
        <input
          type="button"
          value="ordenar"
          name="ordenar"
          className="child"
          data-testid="column-sort-button"
        />
        <input
          type="button"
          value="remover filtros"
          name="remover filtros"
          data-testid="button-remove-filters"
          className="child"
          onClick={ () => {
            setGetFilter([]);
            setRemoveFilter([]);
            setDataFilter(planetData);
          } }
        />
      </div>
      <div>

        {removeFilter && removeFilter.map((remover, idx) => (
          <p data-testid="filter" key={ idx }>
            {remover}
            {' '}
            <button
              data-testid={ `filter ${idx}` }
              onClick={ () => {
                removing(idx);
                // setDataFilter(filterAtt(idx));
              } }
            >
              x

            </button>
          </p>
        ))}
      </div>
    </>

  );
}

export default Form;

import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import './Form.css';

function Form() {
  const { values } = useContext(FilterContext);
  const {
    setNameInput,
    setSelColumnInput,
    setSelOperatorInput,
    setQuantityInput,
    setButtonInput,
  } = values;

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
    const { selColumnInput, selOperatorInput, quantityInput } = values;
    return [selColumnInput, selOperatorInput, quantityInput];
  }

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
          { dataCol.map((col) => (
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
          onChange={ (e) => setQuantityInput(handleChange(e)) }
        />
        <input
          type="button"
          data-testid="button-filter"
          value="filtrar"
          name="filtrar"
          className="child"
          onClick={ () => setButtonInput(setfilter()) }
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
            />
            <label htmlFor="descendente" className="child">Descendente</label>
          </section>
          <section>
            <input
              type="radio"
              id="ascendente"
              name="sort"
              value="ascendente"
            />
            <label htmlFor="ascendente" className="child">Ascendente</label>

          </section>

        </fieldset>
        <input
          type="button"
          value="ordenar"
          name="ordenar"
          className="child"
        />
        <input
          type="button"
          value="remover filtros"
          name="remover filtros"
          className="child"
        />
      </div>

    </>

  );
}

export default Form;

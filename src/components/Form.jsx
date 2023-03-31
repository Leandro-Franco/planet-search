import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import './Form.css';

function Form() {
  const { values } = useContext(FilterContext);
  console.log(values);
  const { setNameInput } = values;

  function handleChange({ target }) {
    const { value } = target;
    return value;
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
        <label htmlFor="Colony" className="child">Colônia:</label>
        <select id="Colony" name="Colony" className="child">
          <option value="Colony" className="child">population</option>
        </select>
        <label htmlFor="operator" className="child">Operador:</label>
        <select id="operator" name="operator" className="child">
          <option value="operator" className="child">maior que</option>
        </select>
        <input type="number" name="quantity" className="child" />
        <input
          type="button"
          value="filtrar"
          name="filtrar"
          className="child"
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

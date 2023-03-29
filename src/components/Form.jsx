import React from 'react';
import './Form.css';

function Form() {
  return (
    <>
      <header>
        <label htmlFor="name">Projeto Star Wars - Trybe </label>
        <p>

          <input
            type="text"
            id="name"
            name="name"
          />
        </p>

      </header>
      <div>
        <label htmlFor="coluna" className="child">Coluna:</label>
        <select id="coluna" name="coluna" className="child">
          <option value="coluna" className="child">population</option>
        </select>
        <label htmlFor="operador" className="child">Operador:</label>
        <select id="operador" name="operador" className="child">
          <option value="operador" className="child">maior que</option>
        </select>
        <input type="number" className="child" />
        <input type="button" value="filtrar" name="filtrar" className="child" />
        <label htmlFor="ordenar" className="child">ordenar:</label>
        <select id="ordenar" name="ordenar" className="child">
          <option value="ordenar" className="child">populationOrder</option>
        </select>
        <fieldset className="child options">

          <section>
            <input
              type="radio"
              id="descendente"
              name="ordem"
              value="descendente"
            />
            <label htmlFor="descendente" className="child">Descendente</label>
          </section>
          <section>
            <input
              type="radio"
              id="ascendente"
              name="ordem"
              value="ascendente"
            />
            <label htmlFor="ascendente" className="child">Ascendente</label>

          </section>

        </fieldset>
        <input type="button" value="ordenar" name="ordenar" className="child" />
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

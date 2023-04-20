import { useState } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [nameInput, setNameInput] = useState('');
  const [selColumnInput, setSelColumnInput] = useState('population');
  const [selOperatorInput, setSelOperatorInput] = useState('maior que');
  const [quantityInput, setQuantityInput] = useState(0);
  const [buttonInput, setButtonInput] = useState('');
  const [selSortInput, setSelSortInput] = useState('');
  const [sortInput, setSortInput] = useState('');
  const [getFilter, setGetFilter] = useState([]);
  const [dataCol, setDataCol] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [col, setCol] = useState('');

  const values = {
    nameInput,
    setNameInput,
    selColumnInput,
    setSelColumnInput,
    selOperatorInput,
    setSelOperatorInput,
    quantityInput,
    setQuantityInput,
    buttonInput,
    setButtonInput,
    selSortInput,
    setSelSortInput,
    sortInput,
    setSortInput,
    getFilter,
    setGetFilter,
    dataCol,
    setDataCol,
    col,
    setCol,
  };
  return (
    <FilterContext.Provider value={ { values } }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterProvider;

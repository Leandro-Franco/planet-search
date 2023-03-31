import { useState } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [nameInput, setNameInput] = useState('');
  const [selColonyInput, setSelColonyInput] = useState('');
  const [selOperatorInput, setSelOperatorInput] = useState('');
  const [quantityInput, setQuantityInput] = useState('');
  const [selSortInput, setSelSortInput] = useState('');
  const [sortInput, setSortInput] = useState('');

  const values = {
    nameInput,
    setNameInput,
    selColonyInput,
    setSelColonyInput,
    selOperatorInput,
    setSelOperatorInput,
    quantityInput,
    setQuantityInput,
    selSortInput,
    setSelSortInput,
    sortInput,
    setSortInput,
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

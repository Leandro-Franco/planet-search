import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';

describe('Testes referentes a tabela e seus filtros', () => {
  beforeEach(() => { 
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({ json: jest.fn().mockResolvedValue(testData) })
  });
  beforeEach(() => render(<App />));
  it('testando TEST-ID', async () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByTestId('name-filter')).toBeInTheDocument();

    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('button-filter')).toBeInTheDocument();
    expect(screen.getByTestId('button-remove-filters')).toBeInTheDocument();
    expect(screen.getByTestId('column-sort-input-asc')).toBeInTheDocument();
    expect(screen.getByTestId('column-sort-input-desc')).toBeInTheDocument();
    expect(screen.getByTestId('column-sort-button')).toBeInTheDocument();
  });

  it('testando itens da tela', async () => {
    const search = screen.getByTestId('name-filter');
    userEvent.type(search, 'a');
    const finded = await screen.findByText('Alderaan');
    expect(finded).toBeInTheDocument();
    const column = screen.getByTestId('column-filter');
    const oper = screen.getByTestId('comparison-filter');
    const value = screen.getByTestId('value-filter');
    const btnfilter = screen.getByTestId('button-filter');
    userEvent.selectOptions(column, 'rotation_period');
    userEvent.selectOptions(oper, 'maior que');
    userEvent.type(value, '23');
    userEvent.click(btnfilter);
    expect(screen.queryByText('Tatooine')).not.toBeInTheDocument();
    expect(screen.getByTestId('filter')).toBeInTheDocument();
    userEvent.selectOptions(column, 'orbital_period');
    userEvent.selectOptions(oper, 'menor que');
    userEvent.clear(value);
    userEvent.type(value, '400');
    userEvent.click(btnfilter);
    expect(screen.queryByText('Yavin IV')).not.toBeInTheDocument();
    userEvent.selectOptions(column, 'surface_water');
    userEvent.selectOptions(oper, 'igual a');
    userEvent.clear(value);
    userEvent.type(value, '40');
    userEvent.click(btnfilter);
    const btn2 = screen.getByTestId('filter 2');
    expect(screen.queryByText('Naboo')).not.toBeInTheDocument();
    userEvent.click(btn2);
    const quant = screen.queryAllByTestId('filter');
    expect(quant.length).toBe(2);
    const btn1 = screen.getByTestId('filter 1');
    const btn0 = screen.getByTestId('filter 0');
    userEvent.click(btn1);
    userEvent.click(btn0);
    expect(screen.queryAllByTestId('filter').length).toBe(0);
    const removeFilter = screen.getByTestId('button-remove-filters');
    userEvent.click(removeFilter);
    expect(screen.queryByText('Tatooine')).toBeInTheDocument();
    userEvent.clear(search);
    const newFinded = await screen.findByText('Hoth');
    expect(newFinded).toBeInTheDocument();
  })

  it('testando resposta da API', async () => {
    expect(global.fetch).toHaveBeenCalled();
  })

  it('testando botões pós filtro',() => {
  })

  it('',() => {

  })
});

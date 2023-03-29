import React, { Component } from 'react';
import Table from '../components/Table';
import Form from '../components/Form';

export default class Home extends Component {
  render() {
    return (
      <>
        <Form />
        <Table />
      </>
    );
  }
}

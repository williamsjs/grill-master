import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../js/actions/index';

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    return (
      <h1>LOL</h1>
    );
  }
}

const MeatPage = connect()(ConnectedMeatPage);

export default MeatPage;
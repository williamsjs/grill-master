import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../../js/actions/index';
import CardList from '../../shared/CardList/CardList';

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchRecipes());
  }

  render() {
    const {isFetching, items} = this.props.recipes;

    if (isFetching) {
      return <h1>loading</h1>;
    }
  
    return <CardList items={items} />
  }
};

const MeatPage = connect(mapStateToProps)(ConnectedMeatPage);

export default MeatPage;
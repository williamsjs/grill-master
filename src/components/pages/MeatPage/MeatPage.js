import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../../js/actions/index';

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
    console.log(this.props.recipes);
    const {isFetching, items} = this.props.recipes;
    
    if (isFetching) {
      return <h1>loading</h1>;
    }

    return (
      items.map(item => <h1 key={item.id} >{item.name}</h1>)
    );
  }
};

const MeatPage = connect(mapStateToProps)(ConnectedMeatPage);

export default MeatPage;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, saveRecipe, editingRecipe, updateRecipe } from '../../../js/actions/index';
import CardList from '../../shared/CardList/CardList';
import Card from '../../shared/Card/Card';

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

const mapDispatchToProps = dispatch => ({
  updateRecipe: (recipe, newVal) => dispatch(updateRecipe(recipe, newVal)),
  saveRecipe: recipe => dispatch(saveRecipe(recipe)),
  editingRecipe: (recipe, editing) => dispatch(editingRecipe(recipe, editing)),
  fetchRecipes: () => dispatch(fetchRecipes())
});

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const {isFetching, items} = this.props.recipes;
    const {updateRecipe, saveRecipe, editingRecipe } = this.props;

    if (isFetching) {
      return <h1>loading</h1>;
    }
  
    return (
      <CardList>
        {items.map(item => <Card key={item.id} item={item} isEditing={editingRecipe} onBlur={saveRecipe} onChange={updateRecipe} />)}
      </CardList>
    )
  }
};

const MeatPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMeatPage);

export default MeatPage;
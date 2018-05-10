import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, saveRecipe, updateRecipe, getRecipe } from '../../../js/actions/index';
import CardList from '../../shared/CardList/CardList';
import Card from '../../shared/Card/Card';
import RecipeForm from './RecipeForm/RecipeForm';

const mapStateToProps = state => {
  return { recipes: state.recipes, currentRecipe: state.currentRecipe };
};

const mapDispatchToProps = dispatch => ({
  updateRecipe: (recipe, newVal) => dispatch(updateRecipe(recipe, newVal)),
  saveRecipe: recipe => dispatch(saveRecipe(recipe)),
  fetchRecipes: () => dispatch(fetchRecipes()),
  getRecipe: id => dispatch(getRecipe(id))
});

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);

    this.state = { showRecipeForm: false };

    this.onClick = this.onClick.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  onClick(show) {
    return e => {
      this.setState({showRecipeForm: show})
    }
  }

  editItem(id) {
    return e => {
      this.props.getRecipe(id);
      this.setState({showRecipeForm: true})
    }
  }

  render() {
    const {isFetching, items} = this.props.recipes;
    const {updateRecipe, saveRecipe, currentRecipe} = this.props;

    if (isFetching) {
      return <h1>loading</h1>;
    }

    return (
      <div className="meat-page">
        {this.state.showRecipeForm ? (
          <RecipeForm onClick={this.onClick} currentRecipe={currentRecipe} />
        ) : (
          <button className="btn watermelon" onClick={this.onClick(true)} >Add Recipe</button>
        )}

        <CardList>
          {items.map(item => <Card key={item.id} item={item} onBlur={saveRecipe} onChange={updateRecipe} editItem={this.editItem} />)}
        </CardList>
      </div>

    )
  }
};

const MeatPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMeatPage);

export default MeatPage;
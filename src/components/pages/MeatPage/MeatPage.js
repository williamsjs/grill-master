import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes, saveRecipe, updateRecipe } from '../../../js/actions/index';
import CardList from '../../shared/CardList/CardList';
import Card from '../../shared/Card/Card';
import AddRecipeForm from './AddRecipeForm/AddRecipeForm';

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

const mapDispatchToProps = dispatch => ({
  updateRecipe: (recipe, newVal) => dispatch(updateRecipe(recipe, newVal)),
  saveRecipe: recipe => dispatch(saveRecipe(recipe)),
  fetchRecipes: () => dispatch(fetchRecipes())
});

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);

    this.state = { addRecipe: false };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  onClick(add) {
    return e => {
      this.setState({addRecipe: add})
    }
  }

  render() {
    const {isFetching, items} = this.props.recipes;
    const {updateRecipe, saveRecipe } = this.props;

    if (isFetching) {
      return <h1>loading</h1>;
    }
  
    return (
      <div className="meat-page">
        {this.state.addRecipe ? (
          <AddRecipeForm onClick={this.onClick} />
        ) : (
          <button className="btn watermelon" onClick={this.onClick(true)} >Add Recipe</button>
        )}

        <CardList>
          {items.map(item => <Card key={item.id} item={item} onBlur={saveRecipe} onChange={updateRecipe} />)}
        </CardList>
      </div>

    )
  }
};

const MeatPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMeatPage);

export default MeatPage;
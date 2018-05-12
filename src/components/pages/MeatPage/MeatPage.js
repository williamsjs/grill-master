import React, { Component } from 'react';
import { connect } from 'react-redux';
import IoPlusCircled from 'react-icons/lib/io/plus-circled';
import { fetchRecipes, saveRecipe, updateRecipe } from '../../../js/actions/index';
import { Link } from 'react-router-dom';
import CardList from '../../shared/CardList/CardList';
import Card from '../../shared/Card/Card';
import './MeatPage.scss';

const mapStateToProps = state => {
  return { recipes: state.recipes, currentRecipe: state.currentRecipe };
};

const mapDispatchToProps = dispatch => ({
  updateRecipe: (recipe, newVal) => dispatch(updateRecipe(recipe, newVal)),
  saveRecipe: recipe => dispatch(saveRecipe(recipe)),
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
    const { recipes: { isFetching, items },  updateRecipe, saveRecipe } = this.props;

    if (isFetching) {
      return <h1>loading</h1>;
    }

    return (
      <div className="meat-page">
        <Link to="/meat/new" style={{marginLeft: '20px'}} >
          <button className="btn watermelon"><IoPlusCircled /> Recipe</button>
        </Link>

        <CardList>
          {items.map(item => <Card key={item.id} item={item} onBlur={saveRecipe} onChange={updateRecipe} linkToUrl={`/meat/${item.id}`} />)}
        </CardList>
      </div>
    );
  }
};

const MeatPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMeatPage);

export default MeatPage;
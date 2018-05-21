import React, { Component } from 'react';
import { connect } from 'react-redux';
import IoPlusCircled from 'react-icons/lib/io/plus-circled';
import { fetchRecipes, deleteRecipe } from '../../../js/ducks/recipes';
import { saveRecipe, reviseRecipe } from '../../../js/ducks/updateRecipe';
import { Link } from 'react-router-dom';
import CardList from '../../shared/CardList/CardList';
import Card from '../../shared/Card/Card';
import Alert from '../../shared/Alert/Alert';
import './MeatPage.scss';

const mapStateToProps = state => {
  return { recipes: state.recipes, currentRecipe: state.currentRecipe };
};

const mapDispatchToProps = dispatch => ({
  updateRecipe: (recipe, newVal) => dispatch(reviseRecipe(recipe, newVal)),
  saveRecipe: recipe => dispatch(saveRecipe(recipe)),
  fetchRecipes: () => dispatch(fetchRecipes()),
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

class ConnectedMeatPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes: { isFetching, items, deleted },  updateRecipe, saveRecipe, deleteRecipe } = this.props;

    if (isFetching) {
      return <h1>loading</h1>;
    }

    return (
      <div className="meat-page">
        <Alert visible={deleted} className={'alert-danger center'} >
          Recipe Deleted!
        </Alert>
        <Link to="/meat/new" style={{marginLeft: '20px'}} >
          <button className="btn watermelon"><IoPlusCircled /> Recipe</button>
        </Link>

        <CardList>
          {items.map(item => (
            <Card key={item.id} 
                  item={item} 
                  onBlur={saveRecipe} 
                  onChange={updateRecipe} 
                  onClick={deleteRecipe}
                  linkToUrl={`/meat/${item.id}`} />
          ))}
        </CardList>
      </div>
    );
  }
};

const MeatPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedMeatPage);

export default MeatPage;
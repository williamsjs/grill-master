import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../../js/ducks/recipes';
import { getRecipe, updateCurrentRecipe, saveCurrentRecipe } from '../../../js/ducks/currentRecipe';
import RecipeForm from './RecipeForm/RecipeForm';
import BackButton from '../../shared/BackButton/BackButton';
import LoadingOverlay from '../../shared/LoadingOverlay/LoadingOverlay';
import Alert from '../../shared/Alert/Alert';

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(getRecipe(id)),
  updateCurrentRecipe: (name, id) => dispatch(updateCurrentRecipe(name, id)),
  saveCurrentRecipe: (name, id) => dispatch(saveCurrentRecipe(name, id)),
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

const mapStateToProps = state => ({
  recipe: state.currentRecipe
});

class ConnectedRecipePage extends Component {
  constructor(props) {
    super(props);

    this.saveRecipe = this.saveRecipe.bind(this);
    this.delete = this.delete.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.updateCurrentRecipe('');
  }

  componentDidMount() {
    const { match: { params }, getRecipe } = this.props;
  
    if (params.id !== 'new') {
      getRecipe(params.id);
    }

    window.scrollTo(0, 0);
  }

  saveRecipe(e) {
    const {name, id} = this.props.recipe;

    e.preventDefault();
    this.props.saveCurrentRecipe(name, id);
  }

  delete(e) {
    this.props.deleteRecipe(this.props.recipe.id);
    this.props.history.push('/meat');
  }

  onChange(e) {
    this.props.updateCurrentRecipe(e.target.value, this.props.recipe.id);
  }

  render() {
    const { loading, history, recipe, deleteRecipe } = this.props;
    return (
      <div className="recipe-page">
        <BackButton goBack={history.goBack} />
        <Alert visible={recipe.saved} className={'alert-success center'}>
          Recipe Saved!
        </Alert>

        {recipe.fetching ?  
                <LoadingOverlay /> 
                : <RecipeForm 
                  recipe={recipe} 
                  onChange={this.onChange} 
                  onSubmit={this.saveRecipe} 
                  onClick={this.delete} />
        }
      </div>
    ); 
  }

};

const RecipePage = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedRecipePage));

export default RecipePage;
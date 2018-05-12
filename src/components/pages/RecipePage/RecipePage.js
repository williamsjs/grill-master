import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipe, updateCurrentRecipe, addRecipe } from '../../../js/actions/index';
import RecipeForm from './RecipeForm/RecipeForm';
import BackButton from '../../shared/BackButton/BackButton';
import LoadingOverlay from '../../shared/LoadingOverlay/LoadingOverlay';

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(getRecipe(id)),
  updateCurrentRecipe: (name) => dispatch(updateCurrentRecipe(name)),
  saveRecipe: () => dispatch(addRecipe())
});

const mapStateToProps = state => ({
  recipe: state.currentRecipe
});

class ConnectedRecipePage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(e) {
    e.preventDefault();
    this.props.saveRecipe();
  }

  render() {
    const { loading, history, recipe, updateCurrentRecipe } = this.props;
    return (
      <div className="recipe-page">
        <BackButton goBack={history.goBack} />

        {recipe.fetching ?  
                <LoadingOverlay /> 
                : <RecipeForm recipe={recipe} onChange={updateCurrentRecipe} onSubmit={this.onSubmit} />
        }
      </div>
    ); 
  }

};

const RecipePage = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedRecipePage));

export default RecipePage;
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Page.scss';
import WhatsHotPage from '../pages/WhatsHotPage/WhatsHotPage';
import BeerPage from '../pages/BeerPage/BeerPage';
import MeatPage from '../pages/MeatPage/MeatPage';
import RecipePage from '../pages/RecipePage/RecipePage';

const mapStateToProps = state => {
  return { menuOpen: state.menuOpen };
}

const ConnectedPage = ({menuOpen}) => {
  return (
    <div className={menuOpen ? "page open" : "page"}>
      <Switch>
        <Route exact path="/whats-hot" component={WhatsHotPage} />
        <Route exact path="/beer" component={BeerPage} />
        <Route exact path="/meat" component={MeatPage} />
        <Route path="/meat/:id" component={RecipePage} />
      </Switch>
    </div>
  );
};

const Page = withRouter(connect(mapStateToProps)(ConnectedPage));

export default Page;
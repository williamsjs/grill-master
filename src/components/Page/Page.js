import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import './Page.scss';

const mapStateToProps = state => {
  return { menuOpen: state.menuToggle };
}

const WhatsHotPage = Loadable({
  loader: () => import('../pages/WhatsHotPage/WhatsHotPage'),
  loading: () => <h1>Loading</h1>
});

const BeerPage = Loadable({
  loader: () => import('../pages/BeerPage/BeerPage'),
  loading: () => <h1>Loading</h1>
});

const MeatPage = Loadable({
  loader: () => import('../pages/MeatPage/MeatPage'),
  loading: () => <h1>Loading</h1>
});

const RecipePage = Loadable({
  loader: () => import('../pages/RecipePage/RecipePage'),
  loading: () => <h1>Loading</h1>
});

const ConnectedPage = ({menuOpen}) => {
  return (
    <div className={menuOpen ? "page open" : "page"}>
      <Switch>
        <Route exact path="/" component={WhatsHotPage} />
        <Route exact path="/beer" component={BeerPage} />
        <Route exact path="/meat" component={MeatPage} />
        <Route path="/meat/:id" component={RecipePage} />
      </Switch>
    </div>
  );
};

const Page = withRouter(connect(mapStateToProps)(ConnectedPage));

export default Page;
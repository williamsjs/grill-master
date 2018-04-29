import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WhatsHotPage from '../pages/WhatsHotPage/WhatsHotPage';
import BeerPage from '../pages/BeerPage/BeerPage';

const Page = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/whats-hot" component={WhatsHotPage} />
        <Route exact path="/beer" component={BeerPage} />
      </Switch>
    </div>
  );
};

export default Page;
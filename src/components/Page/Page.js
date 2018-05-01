import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WhatsHotPage from '../pages/WhatsHotPage/WhatsHotPage';
import BeerPage from '../pages/BeerPage/BeerPage';
import MeatPage from '../pages/MeatPage/MeatPage';

const Page = ({menuOpen}) => {
  return (
    <div className={menuOpen ? "page open" : "page"}>
      <Switch>
        <Route exact path="/whats-hot" component={WhatsHotPage} />
        <Route exact path="/beer" component={BeerPage} />
        <Route exact path="/meat" component={MeatPage} />
      </Switch>
    </div>
  );
};

export default Page;
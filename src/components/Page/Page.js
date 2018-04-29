import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WhatsHot from '../WhatsHot/WhatsHot';

const Page = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/whats-hot" component={WhatsHot} />
      </Switch>
    </div>
  );
};

export default Page;
import React from 'react';
import Nav from './Nav/Nav';
import productDetails from '../src/components/productDetails/productDetails';
import ArticleDetails from '../src/components/articleDetails/articleDetails';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ minHeight: '100%'}}>
      <Router>
        <Switch>
          <Route path="/hsfront" component={Nav}></Route >
          <Route exact path="/productDetails/:id?" component={productDetails}></Route >
          <Route exact path="/articleDetails/:id?" component={ArticleDetails}></Route>
          <Redirect to='/hsfront/home' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

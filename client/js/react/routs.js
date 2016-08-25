/**
 * @module Routs
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout        from "./pages/Layout";
import Main          from "./pages/Main";
import PageNotFound  from "./pages/errors/PageNotFound";

/**
 * @class
 * @name Routs
 * @extends Component
 * @description class for registering an application routing system
 */
export default class Routs extends React.Component {

  /**
   * Rendering method
   * @function
   * @name render - React render
   * @return {object} - Rendered Object.
   */
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Main} />
          <Route path="*" component={PageNotFound}/>
        </Route>
      </Router>
    );
  }
}
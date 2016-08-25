/**
 * @module layout/NavPanel
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';
import DropDown from "../elements/DropDown";

/**
 * @class
 * @name NavPanel
 * @extends Component
 * @description class for Navigation Panel
 */
export default class NavPanel extends React.Component {

  /**
   * @constructs NavPanel
   */
  constructor() {
    super();

    this.state = {
      periods: true
    };
  }

  /**
   * Rendering method
   * @name render - React render
   * @return {object} - Rendered Object.
   */
  render() {

    const msg = "At Chartboost, the only thing we love as much as mobile games is dinosaurs. We've collected our staff's favorites and made them searchable by geological period."
        , title = "Dinosaur Database";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">

          <img class="menu-logo" src="images/logo.png" />

          <h1 class="white title">{title}</h1>

          <div class="white thin size-2 msg">{msg}</div>

          <DropDown />

      </nav>
    );
  }
}

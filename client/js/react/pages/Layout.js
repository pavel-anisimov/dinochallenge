/**
 * @module page/Layout
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';
import NavPanel from "../components/layout/NavPanel";

/**
 * @class
 * @name Layout
 * @extends Component
 * @description class building a Layout for the page
 */
export default class Layout extends React.Component {

  /**
   * Rendering method
   * @function
   * @name render - React render
   * @return {object} Rendered Object.
   */
  render() {
    const { location, children } = this.props;

    return (
      <div id="wrapper" class="toggled">
        <NavPanel location={location} />
        <div id="page-content-wrapper">
          <div class="container-fluid">{ children }</div>
        </div>
      </div>
    );
  }
}
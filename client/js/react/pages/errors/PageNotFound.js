/**
 * @module errors/PageNotFound
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';

/**
 * @class
 * @name PageNotFound
 * @extends Component
 * @description class for building a 404 error page
 */
export default class PageNotFound extends React.Component {

  /**
   * Rendering method.
   * @function
   * @name render - React render
   * @return {object} Rendered Object.
   */
  render() {
    return (
      <div class="row">
        <div class="col-sm-12">
          <div class="gray size-5 thin text-center placeholder">404 - page not found.</div>
        </div>
      </div>
    );
  }
}
/**
 * @module elements/Placeholder
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';

/**
 * @class
 * @name Placeholder
 * @extends Component
 * @description class for building a placeholder (loading, initial, error, etc)
 */
export default class Placeholder extends React.Component {

  /**
   * Rendering method. Using title message from props.
   * @function
   * @name render - React render
   * @return {object} Rendered Object.
   */
  render() {
    const {title} = this.props;

    return (
      <div class="col-sm-12"><div class="gray size-5 thin text-center placeholder">{title}<span class="loading"></span></div></div>
    );
  }
}



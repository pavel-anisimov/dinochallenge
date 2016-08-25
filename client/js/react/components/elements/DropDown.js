/**
 * @module elements/DropDown
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';
import * as DinoActions from "../../actions/DinoActions";


/**
 * @class
 * @name DinoCard
 * @extends Component
 * @description class for building DropDown styled select button
 */
export default class DropDown extends React.Component {

  /**
   * Constructing DropDown and initiating a state with default message
   * and list of periods.
   * @constructs DropDown
   */
  constructor() {
    super();


    this.state = {
      defaultMessage: "Select a Period",
      periods: [ 'Cretaceous', 'Jurassic', 'Triassic']
    };
  }

  /**
   * Builds array of dinosaur periods for the dropdown
   * @name buildLinks - React render
   * @return {array} - Array of jsx objects.
   */
  buildLinks(){
    let {periods} = this.state;

    return periods.map((period,i) => <li key={i}><a href="#" onClick={this.onSelect.bind(this, period) }>{period}</a></li>);
  }

  /**
   * Event method for selecting a dinosaur period
   * Sets state of current period and sends a requst to the Action.
   * @name onSelect - React render
   * @param {string} period - Period where dinosaurs lived
   * @param {object} e - event bind to action
   */
  onSelect(period, e){
    e.preventDefault();

    this.setState({ defaultMessage: period });

    DinoActions.loadDinos(period);

  }

  /**
   * Rendering method. Using message from local state.
   * @name render - React render
   * @return {object} Rendered Object.
   */
  render() {
    let { defaultMessage } = this.state;
    return (

      <div class="btn-group full-width">
        <button type="button" class="btn btn-neutral size-2 thin">{defaultMessage}</button>
        <button type="button" class="btn btn-neutral size-2 thin dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="caret"></span>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu size-2 full-width">
          { this.buildLinks() }
        </ul>
      </div>
    );
  }
}


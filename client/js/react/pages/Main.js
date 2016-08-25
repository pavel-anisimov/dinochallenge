/**
 * @module page/Featured
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from "react";
import DinoStore from "../stores/DinoStore";

/**
 * @class
 * @name Main
 * @extends Component
 * @description class for main search page
 */
export default class Main extends React.Component {

  /**
   * Constructing a main page. Setting a default state for the search results.
   * @constructs Main
   */
  constructor() {
    super();

    this.getDinos = this.getDinos.bind(this);
    this.state = {
      results: DinoStore.getAll(),
    };
  }

  /**
   * @name componentWillMount.
   */
  componentWillMount() {
    DinoStore.on("change", this.getDinos);
  }

  /**
   * @name componentWillUnmount.
   */
  componentWillUnmount() {
    DinoStore.removeListener("change", this.getDinos);
  }

  /**
   * Method for getting initial list of dinosaurs from the storage.
   * By default it will show a blank placeholder page
   * @name getDinos.
   */
  getDinos() {
    this.setState({
      results: DinoStore.getAll(),
    });
  }

  /**
   * Rendering method
   * @name render - React render
   * @return {object} Rendered Object.
   */
  render() {
    const { results } = this.state;

    return (<div class="row">{ results }</div>);
  }
}
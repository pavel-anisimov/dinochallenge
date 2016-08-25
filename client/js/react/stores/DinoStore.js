/**
 * @module stores/DinoStore
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';
import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import Placeholder from "../components/elements/Placeholder";

/**
 * @class
 * @name DinoStore
 * @extends EventEmitter
 * @description class for creating Dinosaur Storage
 */
class DinoStore extends EventEmitter {

  /**
   * @constructs DinoStore
   * @description Storing a placeholder page for dinosaurs
   */
  constructor() {
    super();
    this.dinos = <Placeholder title="Select a time period." />;
  }

  /**
   * Method for returning stored dinosaurs if any, otherwise
   * returning a placeholder message
   * @function
   * @name getAll - getter message
   * @return {array|object} - Stored dinosaurs.
   */
  getAll() {
    return this.dinos;
  }

  /**
   * Evoking an event and calling the cation
   * @function
   * @name handleActions - getter message
   * @param {string} action - Action to handle the event
   */
  handleActions(action) {
    switch(action.type) {
      case "LOAD_DINOS": {
        this.dinos = action.dinos;
        this.emit("change");
        break;
      }
      case "REQ_DINOS": {
        this.dinos = <Placeholder title="Digging up dinosaurs..." />;
        this.emit("change");
        break;
      }
    }
  }
}

const dinoStore = new DinoStore;
dispatcher.register(dinoStore.handleActions.bind(dinoStore));

/** Instance of the registered dino store. */
export default dinoStore;
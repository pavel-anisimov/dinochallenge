/**
 * @module mixins/timestamp
 * @description Adding timestamp to every entry in a database
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
"use strict";

module.exports = (Model) => {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('timeCreated',  {type: Date, default: '$now'});
  Model.defineProperty('timeModified', {type: Date, default: '$now'});
}


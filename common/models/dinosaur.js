/**
 * @file dinosaur.js
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 *
 * @module models/Dinosaur
 * @description Dinosaur model additional custom API methods.
 */
"use strict";

module.exports = Dinosaur => {

  /**
   * Get method for finding all dinosaurs by the period they lived in.
   * @function
   * @name getByPeriod - React render
   * @param {string} period - Period where dinosaurs lived
   * @param {function} cb - Callback method that will be called upon the results
   */
  Dinosaur.getByPeriod = (period, cb) => {

    // Searching with "including" the related boosters option
    Dinosaur.find({ where: {period}, include: 'boosters'}, (err, foundDinos) => {
      if(err) cb(err);

      // There is no practical need for timing out results for 3 seconds.
      // The only reason it was done to simulate a delay and give a front end
      // an opportunity to show "Loading..." type message.
      setTimeout(
        _ => cb( null , foundDinos.sort(
          (a, b) => (b.toJSON().boosters.length - a.toJSON().boosters.length)
          )
        ), 3000)
      ;
    });
  }

  //Call of LP remote method for exposing getByPeriod method to the public,
  //registering parameters, http path and type, and the return object
  Dinosaur.remoteMethod(
    'getByPeriod',
    {
      accepts: { arg: 'period', type: 'string', required: true },
      http:    { path: '/period/:period', verb: 'get' },
      returns: { arg: 'dinos', type: 'object', root: true }
    }
  );
};

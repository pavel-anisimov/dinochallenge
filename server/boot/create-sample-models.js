/**
 * @file create-sample-models.js
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
"use strict";

const async = require('async');

const boosters = require('../../library/data/boosters.json')
    , dinosaurs = require('../../library/data/dinosaurs.json');

/**
 * @module boot/CreateSampleModels
 * @description Dinosaur model additional custom API methods.
 */
module.exports = app => {

  const mongoDs = app.dataSources.mongoDs;

  /**
   * Asynchronous call to create sample database
   */
  async.parallel({
    dinosaurs:  async.apply( createDinosaurs ),
    boosters:   async.apply( createBoosters  )
  }, err => {
    if (err) {
      if( err.toString().includes("Duplicate entry") )
        console.log("Entry already exists");
      else
        throw err;
    }
    console.log('> models created sucessfuly');
  });

  /**
   * @function createBoosters
   * @description Method for creating boosters from sample data
   * @param {function} cb - Callback method that will be called upon the results
   */
  function createBoosters(cb){
    mongoDs.automigrate('Booster', err => {
      if (err) return cb(err);

      app.models.Booster.create(boosters, cb);
    });
  }

  /**
   * @function createDinosaurs
   * @description Method for creating dinosaurs from sample data
   * @param {function} cb - Callback method that will be called upon the results
   */
  function createDinosaurs(cb){
    mongoDs.automigrate('Dinosaur', err => {
      if (err) return cb(err);

      app.models.Dinosaur.create(dinosaurs, cb);
    });
  }
};

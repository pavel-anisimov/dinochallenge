/**
 * @file routs.js
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 *
 * @module boot/Routs
 * @description Dino App static routs
 */
"use strict";

module.exports = app => {

  /**
   * Primary and the only rout targeting ./static/index.pug file
   */
  app.get('/', (req, res) => {
    res.render('static/index');
  });
};

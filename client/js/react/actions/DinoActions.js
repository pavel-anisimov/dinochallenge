/**
 * Load Dinosaurs from backend and dispatch the results to a dispatcher.
 * @module action/DinoAction
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React         from 'react';
import dispatcher    from "../dispatcher";
import DinoCard      from "../components/elements/DinoCard";
import Placeholder   from "../components/elements/Placeholder";
import {BACKEND_URI} from "../Configs";

/**
 * Export Function
 * @function
 * @name action/loadDinos.
 * @param {string} period - Period where dinosaurs lived
 */
export function loadDinos(period) {

  dispatcher.dispatch({type: "REQ_DINOS"});

  // A URL dino.charboost.com does not work. I had to setup my own
  // server with similar mockup data.
  //const url = `${BACKEND_URI}/dinosaurs/period/${period}`;
  const url = `http://dino.chartboost.com/periods/${period}`;

  $ .get(url)
    .done( res => {

      if(res.length){
        dispatcher.dispatch({
          type: "LOAD_DINOS",
          dinos: res.map(
            (dino, i) => <DinoCard key={i} count={dino.boosters.length} name={dino.name} clade={dino.clade} image={dino.image} />
          )});
      } else {
        dispatcher.dispatch({
          type: "LOAD_DINOS",
          dinos: <Placeholder title="No dinosaurs found." />
        });
      }
    })
    .fail( res => {
      dispatcher.dispatch({
        type: "LOAD_DINOS",
        dinos: <Placeholder title="Oops... Something went wrong :(" />
      });
    });
}
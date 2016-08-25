/**
 * @module elements/DinoCard
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */
import React from 'react';
import {IMG_PATH} from "../../Configs";

/**
 * @class
 * @name DinoCard
 * @extends Component
 * @description class for building Dinosaur Card
 */
export default class DinoCard extends React.Component {

  /**
   * Rendering method. Accepts variables from props.
   * @function
   * @name render - React render
   * @return {object} Rendered Object.
   */
  render() {
    let { count, name, clade, image} = this.props;

    if(count == 0) count = '';
    if(!image)     image = 'no-image.jpg';
    if(!clade)     clade = 'No clade';
    if(!name)      clade = 'Unnamed';

    const style = {
      backgroundImage: `url('${IMG_PATH + image}')`
    };

    return (
      <div class="col-xl-12 col-sm-6 col-md-4 col-lg-3">
        <div class="dino-card">
          <div class="count thin">{count}</div>
          <div class="body-image" style={style} />
          <div class="bottom">
            <div class="em size-3 white thin text-center">{name}</div>
            <div class="green size-2 thin text-center">{clade}</div>
          </div>
        </div>
      </div>
    );
  }
}



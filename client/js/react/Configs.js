/**
 * @module Config
 * @author Pavel Anisimov <pavel.n.anisimov@gmail.com>
 * @copyright Pavel Anisimov 2016
 */

let url = window.location.origin;

// In case if the app is called from the standalone compiled index.html file
if( url.includes('file') )
  url = "http://dino.pavel.us";

/** Path to api url for ajax calls */
export const BACKEND_URI = `${url}/api`;

/** Path to servers domain */
export const BACKEND_DOMAIN = `${window.location.origin}`;

/** Path to Image directory */
export const IMG_PATH = `images/avatars/`;
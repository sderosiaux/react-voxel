import { CUBE_CLICK } from '../actions/types.js';

const DEFAULT_SCENE_STATE = {
  cubes: [
    { x: 330, y: 100, z: 100, size: 100 },
    { x: 250, y: 200, z: 100, size: 100 },
    { x: 300, y: 300, z: 100, size: 100 }
  ]
};

export default (state = DEFAULT_SCENE_STATE, action) =>
  action.type === CUBE_CLICK ? { ...state } :
  state;

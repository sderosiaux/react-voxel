import { CUBE_CLICK } from '../actions/types.js';

const flatten = (arrays) => [].concat.apply([], arrays);

const SIZE = 50;
const MARGIN = 5;

const DEFAULT_SCENE_STATE = {
  cubes: flatten(new Array(10).fill(null).map((_, i) =>
                 new Array(10).fill(null).map((_, j) => ({ x: SIZE+j*(SIZE+MARGIN), y: SIZE+i*(SIZE+MARGIN), z: 0, size: SIZE }))))
};

export default (state = DEFAULT_SCENE_STATE, action) =>
  action.type === CUBE_CLICK ? { ...state } :
  state;

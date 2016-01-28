import { CREATE_CUBE, CUBE_CLICK } from '../actions/types.js';

const DEFAULT_SCENE_STATE = {
  cubes: []
};

const toggleCubeClicked = (state, id) => {
  const cubes = state.cubes;
  const cube = cubes.find(c => c.id === id);
  const indexOf = cubes.indexOf(cube);
  state.cubes.splice(indexOf, 1, {...cube, clicked: !cube.clicked });
  return state;
}

export default (state = DEFAULT_SCENE_STATE, action) =>
  action.type === CUBE_CLICK ? toggleCubeClicked(state, action.id) :
  action.type === CREATE_CUBE ? { cubes: state.cubes.concat(action.cube) } :
  state;

import { CREATE_CUBE, CUBE_CLICK } from './types.js';

const getCubeClickAction = (id) => ({ type: CUBE_CLICK, id });
const getCreateCubeAction = (cube) => ({ type: CREATE_CUBE, cube });

export {
  getCubeClickAction,
  getCreateCubeAction
};

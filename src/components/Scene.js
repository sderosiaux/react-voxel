import React from 'react';
import { connect } from 'react-redux'

import Cube from './Cube.js';

const SCENE_CSS = {
  perspective:1000,
  perspectiveOrigin: '50% 50%'
};

const createCube = (props) => <Cube {...props} />;

const Scene = ({ cubes }) => <div style={SCENE_CSS}>{cubes.map(createCube)}</div>;
export { Scene };

//
// Connected component
// 

const mapStateToProps = (state) => ({ cubes: state.cubes });
export default connect(mapStateToProps)(Scene);

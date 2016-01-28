import React from 'react';
import { connect } from 'react-redux';
import getCubeClickAction from '../actions/all.js';

import { Face } from './Face.js';

const CUBE_CSS = (x, y, z) => ({
  position: 'absolute',
  transformStyle: 'preserve-3d',
  transform: `translate3d(${x}px, ${y}px, ${z}px)`
});

//
// Pure component
//
const Cube = ({ size, x, y, z }) => <div style={CUBE_CSS(x, y, z)}>
                          <Face size={size} rotateX={90} rotateY={0}  translateZ={ size / 2} />
                          <Face size={size} rotateX={90} rotateY={0}  translateZ={-size / 2} />
                          <Face size={size} rotateX={0}  rotateY={90} translateZ={ size / 2} />
                          <Face size={size} rotateX={0}  rotateY={90} translateZ={-size / 2} />
                          <Face size={size} rotateX={0}  rotateY={0}  translateZ={ size / 2} />
                          <Face size={size} rotateX={0}  rotateY={0}  translateZ={-size / 2} />
                        </div>;
export { Cube };

//
// Connected component
// 

const mapStateToProps = null;
const dispatchToProps = (dispatch) => ({ onClick: () => dispatch(getCubeClickAction()) });
export default connect(mapStateToProps, dispatchToProps)(Cube);

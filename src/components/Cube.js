import React from 'react';
import { connect } from 'react-redux';
import { getCubeClickAction } from '../actions/all.js';

import { Face } from './Face.js';

const CUBE_CSS = (x, y, z, clicked) => ({
  position: 'absolute',
  transformStyle: 'preserve-3d',
  transform: `translate3d(${x}px, ${y}px, ${z}px)`,
  opacity: (clicked ? 0.5 : 1)
});

//
// Pure component
//
const Cube = ({ id, size, x, y, z, clicked, onClick }) => <div style={CUBE_CSS(x, y, z, clicked)} onClick={() => onClick(id)}>
                          <Face key="top"    size={size} rotateX={90} rotateY={0}  translateZ={ size / 2} />
                          <Face key="bottom" size={size} rotateX={90} rotateY={0}  translateZ={-size / 2} />
                          <Face key="left"   size={size} rotateX={0}  rotateY={90} translateZ={ size / 2} />
                          <Face key="right"  size={size} rotateX={0}  rotateY={90} translateZ={-size / 2} />
                          <Face key="front"  size={size} rotateX={0}  rotateY={0}  translateZ={ size / 2} />
                          <Face key="back"   size={size} rotateX={0}  rotateY={0}  translateZ={-size / 2} />
                        </div>;
export { Cube };

//
// Connected component
// 

const mapStateToProps = (state, props) => state.cubes.find(c => c.id === props.id);
const dispatchToProps = (dispatch) => ({ onClick: (id) => dispatch(getCubeClickAction(id)) });
export default connect(mapStateToProps, dispatchToProps)(Cube);

import React from 'react';
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion';

import { getCreateCubeAction } from '../actions/all.js';
import { getTupleGenerator, getRandomTupleGenerator, getMessageTupleGenerator, getNewCubeFromType } from '../utils/getTupleGenerator.js';
import Cube from './Cube.js';

const SCENE_CSS = {
  perspective: 1000,
  perspectiveOrigin: '50% 50%'
};

const createSizeCube = (props) => {
  return <Motion defaultStyle={{ size: 0 }} style={{ size: spring(props.size) }}>{
            val => <Cube key={props.id} {...props} size={val.size} />
         }</Motion>;
}

const animation = { stiffness: 220, damping: 100 };
const createPositionCube = (props) => {
  return <Motion defaultStyle={{ x: 1000, y: 500, z: 1000, rotateX: Math.random() * 1000, rotateY: Math.random() * 1000 }} style={{ x: spring(props.x, animation), y: spring(props.y, animation), z: spring(props.z, animation), rotateX: spring(0), rotateY: spring(0) }}>{
            val => <Cube key={props.id} {...props} x={val.x} y={val.y} z={val.z} rotateX={val.rotateX} rotateY={val.rotateY} />
         }</Motion>;
}

class Scene extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const gen = getMessageTupleGenerator();
    const timer = setInterval(() => {
      var val;
      if ((val = gen())) {
        dispatch(getCreateCubeAction(getNewCubeFromType(val)));
      } else {
        clearInterval(timer);
      }
    }, 100);
  }
  render() {
    const { cubes } = this.props;
    return <div style={SCENE_CSS}>{cubes.map(createPositionCube)}</div>;
  }
}
export { Scene };

//
// Connected component
// 

const mapStateToProps = (state) => ({ cubes: state.cubes });
export default connect(mapStateToProps)(Scene);

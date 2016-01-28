import React from 'react';
import { connect } from 'react-redux'

import { getCreateCubeAction } from '../actions/all.js';
import { getTupleGenerator, getNewCubeFromType } from '../utils/getTupleGenerator.js';
import Cube from './Cube.js';

const SCENE_CSS = {
  perspective: 1000,
  perspectiveOrigin: '50% 50%'
};



const gen = getTupleGenerator(10, 25);

class Scene extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const timer = setInterval(() => {
      var val;
      if ((val = gen())) {
        dispatch(getCreateCubeAction(getNewCubeFromType(val)));
      } else {
        clearInterval(timer);
      }
    }, 10);
  }
  render() {
    const { cubes } = this.props;
    return <div style={SCENE_CSS}>{cubes.map(props => <Cube key={props.id} {...props} />)}</div>;
  }
}
export { Scene };

//
// Connected component
// 

const mapStateToProps = (state) => ({ cubes: state.cubes });
export default connect(mapStateToProps)(Scene);

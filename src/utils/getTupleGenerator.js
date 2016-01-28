export function getTupleGenerator(rows, columns) {
  let r = 0;
  let c = 0;
  let done = false;
  return () => {
    if (done) return null;
    const t = { i: r, j: c };
    r = (r + 1 > rows ? 0 : r + 1);
    c = (c + 1 > columns ? 0 : c + 1);
    if (!r && !c) { done = true; }
    return t;
  }
}

const SIZE = 50;
const MARGIN = 5;

let cubeId = 0;
export function getNewCubeFromType({ i, j }) {
  return {
    id: cubeId++,
    x: SIZE+j*(SIZE+MARGIN),
    y: SIZE+i*(SIZE+MARGIN),
    z: (i-j)*(j-i)/2,
    size: SIZE
  };
}

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

export function getRandomTupleGenerator(rows, columns) {
  const arr = [];
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < columns; j++)
      arr.push({ i, j });
  arr.sort(() => Math.random() > 0.5);
  arr.sort(() => Math.random() > 0.5);

  return () => {
    if (!arr.length) return null;
    return arr.pop();
  }
}

const REACT = [
  [ 1, 1, 1,  ,  , 1, 1, 1, 1,  ,  , 1, 1,  ,  , 1, 1, 1, 1,  , 1, 1, 1, 1, 1 ],
  [ 1,  ,  , 1,  , 1,  ,  ,  ,  , 1,  ,  , 1,  , 1,  ,  ,  ,  ,  , , 1,   ],
  [ 1,  ,  , 1,  , 1,  ,  ,  ,  , 1,  ,  , 1,  , 1,  ,  ,  ,  ,  , , 1,   ],
  [ 1, 1, 1,  ,  , 1, 1, 1,  ,  , 1, 1, 1, 1,  , 1,  ,  ,  ,  ,  , , 1,   ],
  [ 1,  , 1,  ,  , 1,  ,  ,  ,  , 1,  ,  , 1,  , 1,  ,  ,  ,  ,  , , 1,   ],
  [ 1,  ,  , 1,  , 1,  ,  ,  ,  , 1,  ,  , 1,  , 1,  ,  ,  ,  ,  , , 1,   ],
  [ 1,  ,  , 1,  , 1, 1, 1, 1,  , 1,  ,  , 1,  , 1, 1, 1, 1,  ,  , , 1,   ],
];
export function getMessageTupleGenerator(message = REACT) {
  const arr = [];
  for (let i = 0; i < message.length; i++)
    for (let j = 0; j < message[i].length; j++)
      if (message[i][j])
        arr.push({ i, j });
  arr.sort(() => Math.random() > 0.5);
  arr.sort(() => Math.random() > 0.5);

  return () => {
    if (!arr.length) return null;
    return arr.pop();
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

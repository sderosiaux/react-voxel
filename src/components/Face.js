import React from 'react';

const FACE_CSS = ({ size, rotateX, rotateY, translateZ }) => ({
  display: 'block',
  position: 'absolute',
  outline: 0,
  border: 0,
  marginLeft: -size/2,
  marginTop: -size/2,
  width: size,
  height: size,
  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
  cursor: 'pointer',
});

const FACE_IMG_CSS = {
  border: 0,
  outline: 0,
  width: '100%',
  height: '100%'
};

const Face = (props) => <div style={FACE_CSS(props)}>
                          <img style={FACE_IMG_CSS} src="https://facebook.github.io/react/img/logo_og.png" />
                        </div>;
export { Face };

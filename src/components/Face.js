import React from 'react';

const FACE_CSS = ({ size, rotateX, rotateY, translateZ }) => ({
  display: 'block',
  position: 'absolute',
  outline: 'none',
  border: 'none',
  marginLeft: -size/2,
  marginTop: -size/2,
  width: size,
  height: size,
  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
  cursor: 'pointer'
});

const FACE_IMG_CSS = {
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,.2)'
};

const Face = (props) => <div style={FACE_CSS(props)}>
                          <img style={FACE_IMG_CSS} src="" />
                        </div>;
export { Face };

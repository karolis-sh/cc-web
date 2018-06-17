import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SIZE = 220;

const Image = styled.div`
  position: relative;
  margin: 10px;
  height: 220px;
  width: 220px;
  cursor: pointer;
  border-radius: 2px;
  overflow: hidden;

  > img {
    height: ${SIZE}px;
    width: ${SIZE}px;
  }

  > .counter {
    font-size: 0.8em;
    font-weight: bold;
    position: absolute;
    bottom: 0.2em;
    right: 0.6em;
    color: white;
    opacity: 0.8;
  }
`;

function ProjectImage({ onClick, image, counterValue }) {
  return (
    <Image onClick={onClick}>
      <div className="project-image-filter" />
      <img src={image.src} alt="preview" />
      <div className="counter">{counterValue}</div>
    </Image>
  );
}

ProjectImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  counterValue: PropTypes.string.isRequired,
};

ProjectImage.SIZE = SIZE;

export default ProjectImage;

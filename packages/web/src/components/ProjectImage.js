import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.div`
  position: relative;
  margin: 0 10px 20px 10px;
  height: 220px;
  width: 220px;
  cursor: pointer;

  > img {
    border-radius: 3px;
    height: 220px;
    width: 220px;
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

function ProjectImage({ onClick, image, alt, counterValue }) {
  return (
    <Image onClick={onClick}>
      <div className="project-image-filter" />
      <img src={image.src} alt={alt} />
      <div className="counter">{counterValue}</div>
    </Image>
  );
}

ProjectImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  counterValue: PropTypes.string.isRequired,
};

export default ProjectImage;

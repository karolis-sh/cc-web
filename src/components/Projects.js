import PropTypes from 'prop-types';
import React from 'react';
import Lightbox from 'react-images';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import ProjectImage from './ProjectImage';

const ProjectTitle = styled.h1`
  border-bottom: 2px solid black;
  font-weight: bold;
`;

const ProjectImages = styled.div`
  max-height: 480px;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
`;

class Project extends React.Component {
  state = { open: false, currentImage: 0 };

  onClose = () => this.setState({ open: false, currentImage: 0 });

  onOpen = (index) => this.setState({ open: true, currentImage: index });

  onChangeCurrentImage = (index) => {
    const { images } = this.props;
    if (index < images.length && index > -1) {
      this.setState({ currentImage: index });
    }
  };

  render() {
    const { open, currentImage } = this.state;
    const { title, images } = this.props;
    return (
      <div className="mb4">
        <ProjectTitle className="ph2 mb1 fs4">{title}</ProjectTitle>
        <ProjectImages>
          {images.map((item, index) => (
            <LazyLoad key={item.preview.src} height={ProjectImage.SIZE}>
              <ProjectImage
                onClick={() => this.onOpen(index)}
                image={item.thumbnail}
                counterValue={`${index + 1} / ${images.length}`}
              />
            </LazyLoad>
          ))}
        </ProjectImages>
        <Lightbox
          isOpen={open}
          images={images.map((item) => ({ src: item.preview.src }))}
          currentImage={currentImage}
          onClose={this.onClose}
          onClickNext={() => this.onChangeCurrentImage(currentImage + 1)}
          onClickPrev={() => this.onChangeCurrentImage(currentImage - 1)}
        />
      </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

function Projects({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Project key={item.id} {...item} />
      ))}
    </div>
  );
}

Projects.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Projects;

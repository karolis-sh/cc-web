import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import styled from 'styled-components';

import { ProjectImage } from './';

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class FeaturedProjects extends React.Component {
  state = { isOpen: false, selectedProject: undefined, currentImage: 0 };

  onClose = () =>
    this.setState({
      isOpen: false,
      selectedProject: undefined,
      currentImage: 0,
    });

  onOpen = project =>
    this.setState({
      isOpen: true,
      selectedProject: project,
      currentImage: 0,
    });

  onChangeCurrentImage = index => {
    const { selectedProject } = this.state;
    const { items } = this.props;
    if (
      index < items.find(item => item.id === selectedProject).images.length &&
      index > -1
    ) {
      this.setState({ currentImage: index });
    }
  };

  render() {
    const { isOpen, currentImage, selectedProject } = this.state;
    const { items } = this.props;
    return (
      <div>
        <Projects>
          {items.map(item => (
            <div key={item.id}>
              <ProjectImage
                image={item.images[0].thumbnail}
                onClick={() => this.onOpen(item.id)}
                counterValue={`1 / ${item.images.length}`}
              />
              <div className="mh2 mb1 fs1 b">{item.title}</div>
            </div>
          ))}
        </Projects>
        <Lightbox
          isOpen={isOpen}
          images={
            selectedProject != null
              ? items
                  .find(item => item.id === selectedProject)
                  .images.map(item => ({ src: item.preview.src }))
              : []
          }
          currentImage={currentImage}
          onClose={this.onClose}
          onClickNext={() => this.onChangeCurrentImage(currentImage + 1)}
          onClickPrev={() => this.onChangeCurrentImage(currentImage - 1)}
        />
      </div>
    );
  }
}

FeaturedProjects.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          preview: PropTypes.shape({
            src: PropTypes.string.isRequired,
          }).isRequired,
          thumbnail: PropTypes.shape({
            src: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default FeaturedProjects;

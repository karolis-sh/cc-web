import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { FormattedMessage } from 'react-intl';
import Lightbox from 'react-images';
import styled from 'styled-components';

import { CurrentLocale } from '../i18n/components';
import {
  ContentTitle,
  ForwardButton,
  ProjectImages,
  ProjectImage,
} from '../components';

const ProjectTitle = styled.h1`
  border-bottom: 2px solid black;
  font-weight: bold;
`;

class Project extends React.Component {
  state = { open: false, currentImage: 0 };

  onClose = () => this.setState({ open: false, currentImage: 0 });

  onOpen = index => this.setState({ open: true, currentImage: index });

  onChangeCurrentImage = index => {
    const { images } = this.props;
    if (index < images.length && index > -1) {
      this.setState({ currentImage: index });
    }
  };

  render() {
    const { open, currentImage } = this.state;
    const { name, images } = this.props;
    return (
      <div>
        <ProjectTitle className="ph2 mb2 fs4">{name}</ProjectTitle>
        <ProjectImages>
          {images.map((image, index) => (
            <ProjectImage
              key={image.id}
              onClick={() => this.onOpen(index)}
              image={image.thumbnail}
              alt={image.title}
              counterValue={`${index + 1} / ${images.length}`}
            />
          ))}
        </ProjectImages>
        <Lightbox
          isOpen={open}
          images={images.map(item => ({ src: item.preview.src }))}
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
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

function ProjectsPage({ data }) {
  return (
    <div>
      <ContentTitle className="ph2">
        <FormattedMessage id="projects.title" />
      </ContentTitle>
      <CurrentLocale
        render={({ locale }) => {
          const projects =
            data && data[`projects_${locale}`]
              ? data[`projects_${locale}`].items.map(item => item.project)
              : [];
          return (
            <div>
              {projects.map(item => <Project key={item.id} {...item} />)}
            </div>
          );
        }}
      />
      <div className="mt4 mb5">
        <div className="tc mb3 fs2">
          <FormattedMessage id="contact.initiationText" />
        </div>
        <div className="tc">
          <ForwardButton
            url="/contacts"
            text={<FormattedMessage id="contact.initiationAction" />}
          />
        </div>
      </div>
    </div>
  );
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsPageQuery {
    projects_en: allContentfulProject(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      items: edges {
        project: node {
          id
          name
          images {
            id
            title
            preview: resolutions(width: 1200) {
              src
            }
            thumbnail: resolutions(width: 220, height: 220) {
              src
            }
          }
        }
      }
    }
    projects_sv: allContentfulProject(
      filter: { node_locale: { eq: "sv-SE" } }
    ) {
      items: edges {
        project: node {
          id
          name
          images {
            id
            title
            preview: resolutions(width: 1200) {
              src
            }
            thumbnail: resolutions(width: 220, height: 220) {
              src
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'gatsby';

import { CurrentLocale } from '../i18n/components';
import { ContentTitle, ForwardButton, Projects } from '../components';
import { mapProjects } from '../utils';

function ProjectsPage({ data }) {
  return (
    <CurrentLocale
      render={({ locale }) => {
        const projects = mapProjects(data.projects, locale);
        return (
          <div>
            <ContentTitle className="ph2 mt4-ns">
              <FormattedMessage id="projects.title" />
            </ContentTitle>
            <Projects items={projects} />
            <div className="mt4 mt5-ns mb5">
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
      }}
    />
  );
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default ProjectsPage;

export const query = graphql`
  {
    projects: allNetlifyContent(
      filter: { contentType: { eq: "projects" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          id: contentKey
          frontmatter {
            title_en: title
            title_sv
            order
            featured
            images {
              enabled
              image {
                transform: childImageSharp {
                  preview: resolutions(width: 1200, quality: 85) {
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
      }
    }
  }
`;

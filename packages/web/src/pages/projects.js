import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { FormattedMessage } from 'react-intl';

import { CurrentLocale } from '../i18n/components';
import { ContentTitle, ForwardButton, Projects } from '../components';

function ProjectsPage({ data }) {
  return (
    <div>
      <ContentTitle className="ph2 mt4-ns">
        <FormattedMessage id="projects.title" />
      </ContentTitle>
      <CurrentLocale
        render={({ locale }) => {
          const projects =
            data && data[`projects_${locale}`]
              ? data[`projects_${locale}`].items.map(item => item.project)
              : [];
          return <Projects items={projects} />;
        }}
      />
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

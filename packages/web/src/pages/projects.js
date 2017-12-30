import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { FormattedMessage } from 'react-intl';

import { CurrentLocale } from '../i18n/components';

function ProjectsPage({ data }) {
  return (
    <div>
      <h1>Projects</h1>
      <FormattedMessage id="app.hello" />
      <CurrentLocale
        render={({ locale }) => {
          const projects = data[locale]
            ? data[locale].items.map(item => item.project)
            : [];
          return (
            <div>
              {projects.map(item => (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <div>
                    {item.images.map(image => (
                      <img
                        key={image.id}
                        src={image.thumbnail.src}
                        alt={image.title}
                        style={{ padding: 10 }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }}
      />
    </div>
  );
}

ProjectsPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProjectsPage;

export const pageQuery = graphql`
  query PageQuery {
    en: allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      items: edges {
        project: node {
          id
          name
          images {
            id
            title
            preview: file {
              src: url
            }
            thumbnail: resolutions(width: 220, height: 220) {
              src
            }
          }
        }
      }
    }
    sv: allContentfulProject(filter: { node_locale: { eq: "sv-SE" } }) {
      items: edges {
        project: node {
          id
          name
          images {
            id
            title
            preview: file {
              src: url
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

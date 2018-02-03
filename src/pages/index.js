import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { FormattedMessage } from 'react-intl';

import { CurrentLocale } from '../i18n/components';
import {
  Services,
  FeaturedProjects,
  ContentTitle,
  ForwardButton,
} from '../components';
import { mapProjects } from '../utils';

function IndexPage({ data }) {
  return (
    <CurrentLocale
      render={({ locale }) => {
        const services = data.services.edges.map(item => ({
          title: item.node.frontmatter[`title_${locale}`],
        }));
        const projects = mapProjects(data.projects, locale);
        return (
          <div className="mh2">
            <div className="dn-ns">
              <ContentTitle>
                <FormattedMessage id="home.welcomeTitle" />
              </ContentTitle>
              <p className="tj">
                <FormattedMessage id="home.welcomeText" />
              </p>
            </div>

            <ContentTitle className="mt4-ns">
              <FormattedMessage id="home.servicesTitle" />
            </ContentTitle>
            <Services items={services} />

            <ContentTitle className="mt4-ns">
              <FormattedMessage id="home.procejtsTitle" />
            </ContentTitle>
            <FeaturedProjects items={projects} />

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

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    services: allNetlifyContent(
      filter: { contentType: { eq: "services" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title_en: title
            title_sv
            order
          }
        }
      }
    }

    projects: allNetlifyContent(
      filter: {
        contentType: { eq: "projects" }
        frontmatter: { featured: { eq: true } }
      }
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

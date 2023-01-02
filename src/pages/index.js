import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import { CurrentLocale } from '../i18n/components';
import {
  Services,
  FeaturedProjects,
  ContentTitle,
  ForwardButton,
  Certificates,
} from '../components';
import { mapProjects } from '../utils';
import staticData from '../data';

function IndexPage({ data: pageData }) {
  return (
    <CurrentLocale
      render={({ locale }) => {
        const services = pageData.services.edges.map(item => ({
          title: item.node.frontmatter[`title_${locale}`],
        }));
        const projects = mapProjects(pageData.projects, locale);
        console.log('projects :>> ', projects);
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
            <div className="mt4 mb5 tc">
              <ForwardButton
                url="/projects/"
                text={<FormattedMessage id="projects.initiationAction" />}
              />
            </div>

            {!!(staticData.certificates && staticData.certificates.length) && (
              <React.Fragment>
                <ContentTitle className="mt4-ns">
                  <FormattedMessage id="home.certificates" />
                </ContentTitle>
                <Certificates />
              </React.Fragment>
            )}

            <div className="mt4 mt5-ns mb5">
              <div className="tc mb3 fs2">
                <FormattedMessage id="contact.initiationText" />
              </div>
              <div className="tc">
                <ForwardButton
                  url="/contacts/"
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

export const query = graphql`
  {
    services: allNetlifyContent(
      filter: { contentType: { eq: "services" } }
      sort: { frontmatter: { order: DESC } }
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
      filter: { contentType: { eq: "projects" }, frontmatter: { featured: { eq: true } } }
      sort: { frontmatter: { order: DESC } }
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
                  preview: resize(width: 1200, quality: 85) {
                    src
                  }
                  thumbnail: resize(width: 220, height: 220) {
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

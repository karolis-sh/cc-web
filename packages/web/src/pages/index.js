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

function IndexPage({ data }) {
  return (
    <div className="mh2">
      <ContentTitle>
        <FormattedMessage id="home.welcomeTitle" />
      </ContentTitle>
      <p className="tj">
        <FormattedMessage id="home.welcomeText" />
      </p>

      <ContentTitle>
        <FormattedMessage id="home.servicesTitle" />
      </ContentTitle>
      <CurrentLocale
        render={({ locale }) => {
          const services =
            data && data[`services_${locale}`]
              ? data[`services_${locale}`].items.map(item => item.service)
              : [];
          return <Services items={services} />;
        }}
      />

      <ContentTitle>
        <FormattedMessage id="home.procejtsTitle" />
      </ContentTitle>
      <CurrentLocale
        render={({ locale }) => {
          const projects =
            data && data[`projects_${locale}`]
              ? data[`projects_${locale}`].items.map(item => item.project)
              : [];
          return <FeaturedProjects items={projects} />;
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

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageQuery {
    services_en: allContentfulService(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      items: edges {
        service: node {
          id
          text
        }
      }
    }
    services_sv: allContentfulService(
      filter: { node_locale: { eq: "sv-SE" } }
    ) {
      items: edges {
        service: node {
          id
          text
        }
      }
    }
    projects_en: allContentfulProject(
      filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
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
      filter: { node_locale: { eq: "sv-SE" }, featured: { eq: true } }
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

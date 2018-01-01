import React from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import contentData from '../data';
import { media } from '../style';
import { CurrentLocale } from '../i18n/components';
import { ContentTitle } from '../components';

const Contacts = styled.div`
  ${media.notSmall`
    width: 70%;
    margin: auto;
  `};
`;

function ContactsPage({ data }) {
  return (
    <div className="mh2">
      <ContentTitle>
        <FormattedMessage id="contact.title" />
      </ContentTitle>

      <CurrentLocale
        render={({ locale }) => {
          const contact =
            data && data[`contact_${locale}_${contentData.$key}`]
              ? data[`contact_${locale}_${contentData.$key}`]
              : undefined;
          return contact ? (
            <Contacts>
              <ReactMarkdown source={contact.markdown.value} />
            </Contacts>
          ) : null;
        }}
      />
    </div>
  );
}

ContactsPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ContactsPage;

export const pageQuery = graphql`
  query ContactsPageQuery {
    contact_en_esc: contentfulMarkdown(
      key: { eq: "esc.contacts" }
      node_locale: { eq: "en-US" }
    ) {
      markdown: childContentfulMarkdownValueTextNode {
        value
      }
    }
    contact_sv_esc: contentfulMarkdown(
      key: { eq: "esc.contacts" }
      node_locale: { eq: "sv-SE" }
    ) {
      markdown: childContentfulMarkdownValueTextNode {
        value
      }
    }
    contact_en_statrem: contentfulMarkdown(
      key: { eq: "statrem.contacts" }
      node_locale: { eq: "en-US" }
    ) {
      markdown: childContentfulMarkdownValueTextNode {
        value
      }
    }
    contact_sv_statrem: contentfulMarkdown(
      key: { eq: "statrem.contacts" }
      node_locale: { eq: "sv-SE" }
    ) {
      markdown: childContentfulMarkdownValueTextNode {
        value
      }
    }
  }
`;

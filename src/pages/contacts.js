import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import contentData from '../data';
import { media } from '../style';
import { ContentTitle } from '../components';

const Contacts = styled.div`
  ${media.notSmall`
    width: 70%;
    margin: auto;
  `};
`;

const Link = styled.a`
  text-decoration: none;
  color: #337ab7;

  :hover {
    text-decoration: underline;
  }
`;

function ContactsPage({ data }) {
  const contacts = data.contacts.edges.map(({ node: { frontmatter: { title, phone } } }) => ({
    title,
    phone,
  }));

  return (
    <div className="mh2">
      <ContentTitle className="mt4-ns">
        <FormattedMessage id="contact.title" />
      </ContentTitle>

      <Contacts>
        <FormattedMessage id="contact.text" />
        <ul>
          {contacts.map(item => (
            <li key={item.title}>
              <Link href={`tel:${item.phone.replace(' ', '')}`}>{item.phone}</Link> - {item.title}
            </li>
          ))}
          {contentData.email && (
            <li>
              <Link href={`mailto:${contentData.email}`}>{contentData.email}</Link>
            </li>
          )}
        </ul>
      </Contacts>
    </div>
  );
}

ContactsPage.propTypes = {
  data: PropTypes.shape({
    contacts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactsPage;

export const query = graphql`
  {
    contacts: allNetlifyContent(filter: { contentType: { eq: "contacts" } }) {
      edges {
        node {
          id: contentKey
          frontmatter {
            title
            phone
          }
        }
      }
    }
  }
`;

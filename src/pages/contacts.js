import React from 'react';
import PropTypes from 'prop-types';
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
      <ContentTitle className="mt4-ns">
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

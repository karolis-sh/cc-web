import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ContentTitle } from '../components';

function ContactsPage() {
  return (
    <div>
      <ContentTitle>
        <FormattedMessage id="contact.title" />
      </ContentTitle>
    </div>
  );
}

export default ContactsPage;

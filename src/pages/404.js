import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ContentTitle, ForwardButton } from '../components';

export default function ContactsPage() {
  return (
    <div className="mh2">
      <ContentTitle className="mt4-ns">404</ContentTitle>
      <p className="tc mv5">
        <FormattedMessage id="404.notfound" />
      </p>
      <div className="tc">
        <ForwardButton url="/" text={<FormattedMessage id="404.home" />} />
      </div>
    </div>
  );
}

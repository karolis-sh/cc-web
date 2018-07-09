import React from 'react';
import styled from 'styled-components';

import { LocaleSwitcher } from '../i18n/components';
import { media } from '../style';

const Wrapper = styled.div`
  ${media.notSmall`
    display: flex;
    justify-content: flex-end;
  `};
`;

const Flag = styled.div`
  width: 24px;
  height: 16px;
  border: 1px solid black;
  background: url('/images/flags/${({ language }) =>
    language}.png') no-repeat center;
  cursor: pointer;

  ${media.notSmall`
    display: inline-block;
  `}
`;

function LanguageSwitcher() {
  return (
    <LocaleSwitcher
      render={({ setLocale }) => (
        <Wrapper>
          <Flag
            language="en"
            className="mv2 ml2"
            onClick={() => setLocale('en')}
          />
          <Flag
            language="sv"
            className="mv2 mh2"
            onClick={() => setLocale('sv')}
          />
        </Wrapper>
      )}
    />
  );
}

export default LanguageSwitcher;

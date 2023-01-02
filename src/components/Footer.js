import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import data from '../data';
import FAIcon from './FAIcon';

const Container = styled.footer`
  background: #222;
  color: ${({ theme }) => theme.color.gray4};
`;

const Link = styled(OutboundLink)`
  color: ${({ theme }) => theme.color.gray4};
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  let yearPeriod = year;
  if (year !== data.startYear) yearPeriod = `${data.startYear} - ${year}`;
  return (
    <Container className="pv4">
      <div className="container ph2">
        <div className="tc">
          <FAIcon type="copyright" /> {yearPeriod} {data.urlName} -{' '}
          <span className="color-accent-1-highlight">{data.companyName}</span>
        </div>
        <div className="tc mt3">
          <FormattedMessage id="footer.solution" /> -{' '}
          <Link
            href="https://karolis.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            karolis.sh
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

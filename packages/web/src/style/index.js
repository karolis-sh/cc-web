import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

import media from './media';
import './index.scss';

const COLORS = {
  orange1: '#D4690C',
  gray1: '#222222',
  gray2: '#333333',
  gray3: '#494949',
};

const theme = {
  color: {
    accent1: COLORS.orange1,
    gray1: COLORS.gray1,
    gray2: COLORS.gray2,
    gray3: COLORS.gray3,
  },
};

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    font-family: "Asap", "Helvetica", -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
      "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #222;
    background-color: #fff;
  }

  .container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }

  .project-image-filter {
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(to bottom, transparent 66%, rgba(34, 34, 34, 0.5) 100%),
      linear-gradient(to top, transparent 66%, rgba(34, 34, 34, 0.25) 100%),
      linear-gradient(to right, transparent 66%, rgba(34, 34, 34, 0.25) 100%),
      linear-gradient(to left, transparent 66%, rgba(34, 34, 34, 0.25) 100%);
  }

  .shadow {
    box-shadow:
      0 2px 2px 0 rgba(0, 0, 0, .14),
      0 3px 1px -2px rgba(0, 0, 0, .2),
      0 1px 5px 0 rgba(0, 0, 0, .12);
  }

  .fs1 {
    font-size: 1.1rem;
  }

  .fs2 {
    font-size: 1.2rem;
  }

  .fs3 {
    font-size: 1.3rem;
  }

  .fs4 {
    font-size: 1.4rem;
  }
`;

export { theme, media };

import { injectGlobal } from 'styled-components';

import media from './media';
import './index.scss';

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
    max-width: 970px;
    margin: auto;
  }

  .project-image-filter {
    border-radius: 3px;
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
`;

export { media };

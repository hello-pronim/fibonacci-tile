import { css } from "@styled-system/css";

const global = css`
  /* reset start */
  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-family: "Everett";
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul {
    list-style: none;
  }

  p {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  /* reset end */
  .display-table {
    display: table;
    border-collapse: collapse;
    width: 100%;
  }
  .display-table > div {
    display: table-row;
  }
  .display-table > div > div {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-open {
    overflow: hidden;
    position: fixed;
  }
`;

export default global;

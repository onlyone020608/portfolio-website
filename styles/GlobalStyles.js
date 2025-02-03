import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f5f5f5;
  }
  .ant-segmented {
    background-color: #cbcbcb;
    border-radius: 20px;
  }

  .ant-segmented-item {
    padding: 12px 60px;
    will-change: background-color, border-radius;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
    /* transition: all 0.3s ease; */
  }

  .ant-segmented-item-selected {
    border-radius: 22px !important;
  }
  .ant-segmented-thumb {
    border-radius: 22px !important;
    background: transparent !important;
    /* z-index: 1; */
    /* transition: all 0.3s ease; */
  }
  .ant-segmented-item:hover {
    transition: background-color 0.3s ease, border-radius 0.3s ease;
    border-radius: 22px;
  }
`;

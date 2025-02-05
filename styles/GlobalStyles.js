import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f5f5f5;
  }
  .ant-segmented-thumb {
    border-radius: 20px !important;
    transition: transform 0.4s ease-in-out !important;
  }
  .ant-segmented {
    background-color: #cbcbcb;
    border-radius: 20px !important;
    width: 1060px;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .ant-segmented-group {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .ant-segmented-item {
    position: relative;
    z-index: 1;
    color: #333;
    transition: color 0.4s ease-in-out;
    padding: 12px 60px;
    border-radius: 22px !important;
    width: 100%;
    text-align: center;
  }

  .ant-segmented-item-selected {
    border-radius: 22px !important;
    background-color: transparent;
  }
`;

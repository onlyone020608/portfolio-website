import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    /* outline: 1px solid red; */
  }
  body {
    background-color: #f5f5f5;
    width: 100%;
    overflow-x: hidden;
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

  .anticon-down {
    width: 0.6em;
    height: 0.6em;
    color: #5b5b5b;
  }

  .anticon-down > svg {
    padding-top: 3.5px;
  }

  .ant-dropdown-trigger {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  .ant-segmented-item-selected {
    border-radius: 22px !important;
    background-color: transparent;
  }

  .ant-carousel {
    display: flex;
    justify-content: center;
  }

  .slick-slider {
    width: 100%;
  }

  /* .slick-list {
    width: 100%;
  } */
  .ant-dropdown-menu {
    display: flex !important;
    flex-direction: column;
    gap: 5px !important;
  }
  .ant-dropdown-menu-item {
    font-size: 16px !important;
    /* font-weight: 400 !important; */
  }
`;

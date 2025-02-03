import styled from "@emotion/styled";
import { Tooltip } from "antd";

export const SegItem = styled.div`
  background-color: transparent;
  /* color: red; */
  padding: 14px 80px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const TipContent = styled.div`
  background: transparent;
  display: flex;
  gap: 10px;
`;

export const CopyIcon = styled.div`
  cursor: pointer;
  background: transparent !important;
  svg {
    background: transparent !important;
  }
`;

export const ContactIcon = styled.a`
  display: flex;
  gap: 21px;
  font-size: 26px;
  border: 1px solid red;
  align-items: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const TechBar = styled.div`
  width: 1026.33px;
  height: 59.92px;
  padding: 2px 83.42px 2px 2px;
  /* gap: 94.42px; */
  border-radius: 22px;
  background-color: #cbcbcb;
  display: flex;
  flex-direction: row;
`;

export const TechBarItem = styled.div`
  display: flex;
  background-color: white;
  border-radius: 22px;
  font-size: 19.25px;
  color: #5b5b5b;
  font-weight: 600;
  align-items: center;
  padding: 0px 65px;
`;

export const TechIconWrapper = styled.div`
  display: flex;
  gap: 34px;
  padding-left: 20px;
`;

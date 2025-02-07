import styled from "@emotion/styled";
import Link from "next/link";
import { css } from "@emotion/react";

const baseItemStyle = css`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  text-decoration: none;
`;
export const DropItem = styled.a`
  ${baseItemStyle}
  color: ${(props) => (props.active ? "black" : "#cbcbcb")};
`;

export const MenuItem = styled(Link)`
  ${baseItemStyle}
  transition: transform 0.3s ease;
  color: ${(props) => (props.active ? "black" : "#cbcbcb")};
  &:hover {
    transform: ${(props) => (!props.active ? "scale(1.05)" : "none")};
  }
`;

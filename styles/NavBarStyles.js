import styled from "@emotion/styled";
import Link from "next/link";
export const MenuItem = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  text-decoration: none;
  color: ${(props) => (props.active ? "black" : "#cbcbcb")};
  transition: transform 0.3s ease;
  &:hover {
    transform: ${(props) => (!props.active ? "scale(1.05)" : "none")};
  }
`;

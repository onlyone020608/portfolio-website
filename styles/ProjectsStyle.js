import styled from "@emotion/styled";
import Link from "next/link";
export const ProjectName = styled.div`
  font-size: 52px;
  font-weight: 600;
  color: black;
`;

export const ProjectLink = styled(Link)`
  text-decoration: none;
  div {
    transition: color 0.3s ease, transform 0.3s ease;
  }
  &:hover div {
    color: #5b5b5b;
    transform: scale(1.03);
  }
`;

import styled from "@emotion/styled";

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
  font-size: 22px;
  align-items: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
  img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 5px;
  }

  span {
    transition: color 0.3s ease, transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.01);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }
  &:hover span {
    color: #5b5b5b;
    transform: scale(1.01);
  }
`;

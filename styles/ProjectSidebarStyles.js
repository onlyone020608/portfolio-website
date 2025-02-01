import styled from "@emotion/styled";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const SidebarItem = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => (props.active ? "black" : "#cbcbcb")};
`;

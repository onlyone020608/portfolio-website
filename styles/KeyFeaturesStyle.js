import styled from "@emotion/styled";
export const FeatureWrapper = styled.div`
  display: flex;
  width: 310px;
  height: 420px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 25.9px 1px #0000000f;
  flex-direction: column;
  padding: 0px 20px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #8b8b8b;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 25px 30px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
`;

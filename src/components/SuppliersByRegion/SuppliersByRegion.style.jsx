import styled from "styled-components";

export const StyledSuppliersByRegion = styled.section`
  margin-top: 30px;
`;

export const StyledSuppliersByRegionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const StyledSuppliersByRegionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;
export const StyledSupplierFlagBox = styled.div`
  width: 28px;
  height: 20px;
`;
export const StyledFlag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StyledSupplierInfoBox = styled.div`
  p {
    font-size: 13px;
  }
`;

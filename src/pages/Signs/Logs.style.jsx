import styled from "styled-components";

export const StyledLogMain = styled.main`
  background: #dadada;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 74px;
`;
export const StyledLogSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLogBox = styled.form`
  background-color: #fff;
  width: 387px;
  padding: 30px;
  box-shadow: 0px 3px 10px rgb(32 32 32 / 10%);
  border-radius: 6px;
  display: grid;
  gap: 20px;
  margin: 40px 0;
  button {
    width: 100%;
  }
`;

export const StyledLogTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const StyledContainerInputBox = styled.div`
  display: flex;
  gap: 9px;
`;
export const StyledInputBox = styled.div`
  display: grid;
`;
export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  height: 40px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding-left: 10px;
  outline: none;
  width: 100%;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #a9acb0;
  }
`;
export const StyledOrLine = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    background-color: #e0e0e0;
    height: 1px;
    width: 100%;
    position: absolute;
    inset: 0;
    top: 8px;
  }
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #a9acb0;
    position: relative;
    z-index: 1;
    background: #fff;
    width: 40px;
  }
`;
export const StyledRememberMe = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
  a {
    color: #0d6efd;
  }
`;
export const StyledCheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  aspect-ratio: 1;
  border: 2px solid #bdbdbd;
  border-radius: 5px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  &:checked {
    -moz-appearance: auto;
    -webkit-appearance: auto;
    -o-appearance: auto;
    accent-color: #0d6efd;
  }
`;
export const StyledHaveAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #606060;
  }
  a {
    p {
      color: #0d6efd;
    }
  }
`;
export const StyledLogFooter = styled.footer`
  background-color: #fff;
`;
export const StyledLogFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  padding: 10px 0;
`;
export const StyledPaymentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 34px;
    height: 22px;
    object-fit: cover;
  }
`;
export const StyledLogsFooterLinksBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  li {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #606060;
    opacity: 0.6;
  }
`;

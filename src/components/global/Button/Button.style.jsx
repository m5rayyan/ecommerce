import styled from "styled-components";
export const StyledButton = styled.button.attrs((props) => ({
  type: "button",
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.variant === "shop"
      ? "#FF9017"
      : "linear-gradient(180deg, #127fff 0%, #0067ff 100%)"};

  border-width: ${(props) => props.borderWidth}px;
  border-style: solid;
  border-color: ${(props) => (props.variant === "shop" ? "unset" : "#0d6efd")};
  border-radius: ${(props) => (props.borderRadius === "zero" ? "0" : "6")}px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  height: ${(props) => (props.height ? props.height : "40")}px;
  width: ${(props) => (props.width ? props.width : "100")}px;
  cursor: pointer;
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;
export const WightButton = styled(StyledButton)`
  border: 1px solid #ffffff;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
  color: ${(props) => (props.variant === "blue" ? "#0d6efd" : "#1c1c1c")};
`;

export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
  itemType: props.itemType,
}))`
  box-shadow: 0 0 1px #999;
`;

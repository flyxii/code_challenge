import styled from "styled-components";
import { pxToRem, colors } from "shared/theme";

export const Wrapper = styled.div`
  font-size: ${pxToRem(14)};
  color: ${colors.black};
  background-color: transparent;
  border: 1px solid ${colors.blue};
  cursor: pointer;
  border-radius: ${pxToRem(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pxToRem(4)} ${pxToRem(8)};
`;

export const Button = styled.button`
  font-size: ${pxToRem(18)};
  line-height: 1;
  color: ${colors.blue};
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0 ${pxToRem(8)};
`;

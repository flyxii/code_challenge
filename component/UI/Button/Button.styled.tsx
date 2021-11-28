import styled from "styled-components";
import { Button } from "rebass";
import { pxToRem, colors } from "shared/theme";

export const ButtonUI = styled(Button)`
  font-size: ${pxToRem(12)};
  background-color: ${colors.blue};
  box-shadow: 0px ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.14), 0px ${pxToRem(3)} ${pxToRem(4)} rgba(0, 0, 0, 0.12),
    0px ${pxToRem(1)} ${pxToRem(5)} rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

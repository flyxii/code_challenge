import styled from "styled-components";
import { spacing, pxToRem, fontWeights, colors } from "shared/theme";

export const NavButton = styled.button`
  padding: ${spacing(1)};
  margin: 0px ${pxToRem(4)};
  border: 0;
  border-radius: ${pxToRem(4)};
  background-color: ${colors.white};
  cursor: pointer;
  font-size: ${pxToRem(12)};
  font-weight: ${fontWeights.body};
  transition: background-color 0.3s ease;

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.dark04};
  }
`;

export const CartButton = styled.button`
  padding-left: ${spacing(1)};
  height: ${pxToRem(24)};
  border: 0;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

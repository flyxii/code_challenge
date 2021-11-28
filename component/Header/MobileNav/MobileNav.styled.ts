import styled from "styled-components";
import { spacing, pxToRem, fontWeights, colors } from "shared/theme";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: ${colors.white};
  cursor: pointer;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${colors.black8};
`;

export const NavContainer = styled.div`
  width: ${pxToRem(110)};
  border-radius: ${spacing(1)};
  position: absolute;
  top: ${spacing(2)};
  right: ${spacing(4)};
  padding: ${spacing(2)};
  z-index: 2;
  background-color: ${colors.white};
`;

export const NavButton = styled.button`
  margin: 0};
  border: 0;
  border-radius: ${pxToRem(4)};
  background-color: ${colors.white};
  cursor: pointer;
  font-size: ${pxToRem(12)};
  font-weight: ${fontWeights.body};
  margin-top: ${spacing(2)};
`;

export const CartButton = styled.button`
  height: ${pxToRem(24)};
  border: 0;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: ${spacing(2)};
`;

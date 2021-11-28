import styled from "styled-components";
import { Box } from "rebass";
import { spacing, pxToRem, mediaQueries } from "shared/theme";

export const Wrapper = styled.header`
  height: ${pxToRem(56)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${spacing(4)};
  box-shadow: 0px ${pxToRem(2)} ${pxToRem(8)} rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;

  ${mediaQueries.m} {
    height: ${pxToRem(112)};
  }
`;

export const LogoWrapper = styled(Box)`
  width: ${pxToRem(45)};
  height: ${pxToRem(15)};
  cursor: pointer;

  .logo {
    width: ${pxToRem(45)}; !important;
    height: ${pxToRem(15)}; !important;
  }

  ${mediaQueries.m} {
    width: ${pxToRem(60)};
    height: ${pxToRem(20)};

    .logo {
      width: ${pxToRem(60)} !important;
      height: ${pxToRem(20)} !important;
    }
  }
`;

import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { colors, mediaQueries, spacing, pxToRem, fontWeights } from "shared/theme";

export const ImageWrapper = styled(Box)`
  width: 100%;
  height: ${pxToRem(320)};
  position: relative;
  overflow: hidden;

  ${mediaQueries.m} {
    width: 50%;
    height: ${pxToRem(683)};
  }
`;

export const ImageOverlay = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  z-index: 1;
`;

export const ContentWrapper = styled(Flex)`
  width: 100%;
  height: ${pxToRem(345)};
  padding: ${spacing(4)};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mediaQueries.m} {
    width: 50%;
    height: 683px;
    padding: ${spacing(8)};
  }
`;

export const TextWrapper = styled(Text)`
  fontweight: ${fontWeights.light};
  opacity: 0;
  transform: translate(0px, 20px);
`;

export const ButtonWrapper = styled.div`
  opacity: 0;
  transform: translate(0px, 20px);
`;

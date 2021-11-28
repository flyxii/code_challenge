import styled from "styled-components";
import { Text, Flex } from "rebass";
import { mediaQueries, fontWeights, pxToRem } from "shared/theme";

export const Wrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  background-color; #fafafa;
  flex-direction: column;
  height: ${pxToRem(384)};
  transform: translate(0px, 20px);

  ${mediaQueries.m} {
    height: ${pxToRem(456)}
  }
`;

export const TextWrapper = styled(Text)`
  fontweight: ${fontWeights.light};
  text-align: center;
  opacity: 0;
  transform: translate(0px, 20px);
`;

export const ButtonWrapper = styled.div`
  opacity: 0;
  transform: translate(0px, 20px);
`;

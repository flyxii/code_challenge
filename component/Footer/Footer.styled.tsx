import styled from "styled-components";
import { Text } from "rebass";
import { mediaQueries, spacing, pxToRem, colors, fontWeights } from "shared/theme";

export const Wrapper = styled.footer`
  height: ${pxToRem(434)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: ${spacing(2)} ${spacing(4)};

  ${mediaQueries.l} {
    height: ${pxToRem(279)};
  }
`;

export const Button = styled.button`
  padding: ${spacing(1)} 0;
  margin: ${spacing(1)} ${spacing(1)};
  border: 0;
  border-radius: ${pxToRem(4)};
  background-color: #fff;
  cursor: pointer;
  font-size: ${pxToRem(12)};
  font-weight: ${fontWeights.body};

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }

  ${mediaQueries.l} {
    margin: 0 ${pxToRem(4)};
  }
`;

export const SnsButton = styled.button`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  border: 0;
  cursor: pointer;
  background-color: ${colors.white};

  ${mediaQueries.l} {
    width: ${pxToRem(48)};
    height: ${pxToRem(48)};
  }
`;

export const FooterText = styled(Text)`
  font-size: ${pxToRem(12)};
  opacity: 0.54;
  text-align: left;

  ${mediaQueries.m} {
    text-align: right;
  }
`;

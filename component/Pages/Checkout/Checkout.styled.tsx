import styled from "styled-components";
import { mediaQueries, spacing, colors } from "shared/theme";

export const Wrapper = styled.div`
  width: 100%;
  padding: ${spacing(5)} ${spacing(2)};
  background-color: ${colors.lightGrey};

  ${mediaQueries.m} {
    padding: ${spacing(10)} ${spacing(20)};
  }

  ${mediaQueries.l} {
    padding: ${spacing(15)} ${spacing(35)};
  }
`;

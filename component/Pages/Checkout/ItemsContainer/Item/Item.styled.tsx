import styled from "styled-components";
import { Grid } from "./../ItemContainer.styled";
import { spacing, fontWeights, colors, mediaQueries, pxToRem } from "shared/theme";

export const Wrapper = styled(Grid)`
  padding: ${spacing(1.5)} 0;
  font-weight: ${fontWeights.light};
  flex-direction: column;
  margin-top: ${spacing(4)};

  ${mediaQueries.m} {
    margin-top: 0;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  justify-self: end;
  border: 0;
  background-color: transparent;
`;

export const SepLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.dark04};
  margin: ${spacing(2)} 0;

  ${mediaQueries.m} {
    display: none;
  }
`;

export const Category = styled.div`
  font-size: ${pxToRem(14)};
  font-weight: ${fontWeights.body};

  ${mediaQueries.m} {
    display: none;
  }
`;

import styled from "styled-components";
import { Box } from "rebass";
import { gridColumn, GridColumnProps } from "styled-system";
import { spacing, pxToRem, mediaQueries } from "shared/theme";

interface Props {
  isColumn?: boolean;
}

export const Grid = styled(Box)<Props>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
  justify-content: space-between;
  margin: 0 auto;
  font-size: ${pxToRem(14)};

  ${mediaQueries.m} {
    display: grid;
    grid-template-columns: 30% 15% 35% 10% 10%;
    align-items: start;
  }
`;

export const Cell = styled(Box)<GridColumnProps>`
  ${gridColumn}
`;

export const ButtonWrapper = styled(Grid)`
  padding: ${spacing(2)} 0;
  justify-content: flex-end;

  ${mediaQueries.m} {
    > div {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

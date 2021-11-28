import { Box, Text } from "rebass";
import { spacing, breakpoints, colors } from "shared/theme";
import { useScreenWidth } from "hooks/useScreenWidth";
import { Grid } from "./../ItemContainer.styled";

const Title: React.FC = () => {
  const { screenWidth } = useScreenWidth();

  if (screenWidth <= breakpoints.m.min) return null;

  return (
    <>
      <Grid mb={spacing(2)}>
        <Text>Product</Text>
        <Text justifySelf="end">Price</Text>
        <Text justifySelf="center">Quantity</Text>
        <Text justifySelf="end">Cost</Text>
      </Grid>
      <Box backgroundColor={colors.dark04} height={1} mb={spacing(2)}></Box>
    </>
  );
};

export default Title;

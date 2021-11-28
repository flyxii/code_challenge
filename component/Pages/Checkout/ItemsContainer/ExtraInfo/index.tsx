import { Text } from "rebass";
import { spacing, fontWeights } from "shared/theme";
import { Grid, Cell } from "./../ItemContainer.styled";

interface Props {
  name: string;
  price: string;
  isBold?: boolean;
}

const ExtraInfo: React.FC<Props> = (props) => {
  const { name, price, isBold = false } = props;
  return (
    <Grid pt={spacing(1)} pb={spacing(1)}>
      <Cell gridColumn={"1 / 3"}>
        <Text fontWeight={isBold ? fontWeights.body : fontWeights.light}>{name}</Text>
      </Cell>
      <Cell gridColumn={"4 / 4"} justifySelf="end">
        <Text fontWeight={isBold ? fontWeights.body : fontWeights.light}>£{price}</Text>
      </Cell>
    </Grid>
  );
};

export default ExtraInfo;

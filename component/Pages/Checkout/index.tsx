import { Text } from "rebass";
import { fontWeights, pxToRem, spacing } from "shared/theme";
import ItemsContainer from "./ItemsContainer";
import { Wrapper } from "./Checkout.styled";

const Checkout: React.FC = () => {
  return (
    <main>
      <Wrapper>
        <Text fontSize={pxToRem(24)} fontWeight={fontWeights.light}>
          Your Basket
        </Text>
        <Text
          fontSize={pxToRem(14)}
          lineHeight={pxToRem(24)}
          fontWeight={fontWeights.light}
          mt={pxToRem(8)}
          mb={spacing(5)}
        >
          Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing
          purchase.
        </Text>
        <ItemsContainer />
      </Wrapper>
    </main>
  );
};

export default Checkout;

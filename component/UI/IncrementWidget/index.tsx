import { Flex } from "rebass";
import { Wrapper, Button } from "./IncrementWidget.styled";

interface Props {
  quantity: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}

const Widget: React.FC<Props> = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <Wrapper>
      <Button onClick={onDecrement}>-</Button>
      <Flex pl={1} pr={1} width={2} justifyContent="center">
        {quantity}
      </Flex>
      <Button onClick={onIncrement}>+</Button>
    </Wrapper>
  );
};

export default Widget;

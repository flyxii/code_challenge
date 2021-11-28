import Image from "next/image";
import Delete from "shared/images/Delete.svg";
import { Flex, Text } from "rebass";
import IncrementWidget from "component/UI/IncrementWidget";
import { useContainer } from "./useContainer";
import { Wrapper, DeleteButton, SepLine, Category } from "./Item.styled";

interface Props {
  sku: string;
  name: string;
  price: number;
  stockLevel: number;
  quantity: number;
}

const Item: React.FC<Props> = (props) => {
  const { name, price, quantity } = props;
  const { onIncrement, onDecrement, onDelete} = useContainer(props);

  return (
    <Wrapper>
      <Text>{name}</Text>
      <SepLine />
      <Flex justifyContent={["space-between", null, null, "flex-end"]}>
        <Category>Price</Category>
        <Text>£{price}</Text>
      </Flex>
      <Flex justifyContent={["space-between", null, null, "center"]} mt={[2, null, null, 0]}>
        <Category>Quantity</Category>
        <IncrementWidget 
          quantity={quantity} 
          onIncrement={onIncrement} 
          onDecrement={onDecrement} 
        />
      </Flex>
      <Flex justifyContent={["space-between", null, null, "flex-end"]} mt={[2, null, null, 0]}>
        <Category>Cost</Category>
        <Text>£{(quantity * price).toFixed(2)}</Text>
      </Flex>
      <Flex justifyContent={["space-between", null, null, "flex-end"]} mt={[2, null, null, 0]}>
        <Category>Remove</Category>
        <DeleteButton onClick={onDelete}>
          <Image src={Delete} alt="cart" width={18} height={20} />
        </DeleteButton>
      </Flex>
    </Wrapper>
  );
};

export default Item;

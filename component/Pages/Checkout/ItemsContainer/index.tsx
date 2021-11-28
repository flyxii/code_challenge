import { useContext } from "react";
import { AppContext } from "./../store/context";
import { Box } from "rebass";
import axios from "axios";
import Title from "./Title";
import Item from "./Item";
import ExtraInfo from "./ExtraInfo";
import Button from "component/UI/Button";
import { spacing } from "shared/theme";
import { Cell, ButtonWrapper } from "./ItemContainer.styled";

const ItemsContainer: React.FC = () => {
  const { state } = useContext(AppContext);
  const { products } = state;

  const subtotal = products.reduce(function (acc, obj) { return acc + (obj.price * obj.quantity); }, 0);
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  const onSubmitPayment = async () => {
    try {
      const endpoint = process.env.NEXT_PUBLIC_ENDPOINT || "";
      const res = await axios.post(endpoint, {payment: state.products});

      if (res.status === 200) {
        alert("payment success");
      } else {
        alert("payment not success 1");
      }
    } catch (error) {
      alert("payment not success 2");
    }
  }

  return (
    <>
      <Title />
      {products.map((item) => (
        <Item key={item.sku} sku={item.sku} name={item.name} price={item.price} stockLevel={item.stockLevel} quantity={item.quantity} />
      ))}
      <Box mt={spacing(2)} />
      <ExtraInfo name="Subtotal" price={subtotal.toFixed(2)} />
      <ExtraInfo name="VAT at 20%" price={vat.toFixed(2)} />
      <ExtraInfo name="Total cost" price={total.toFixed(2)} isBold={true} />
      <ButtonWrapper>
        <Cell gridColumn={"1 / 5"}>
          <Button label="BUY NOW" onClick={onSubmitPayment} isDisable={!state.products.length} />
        </Cell>
      </ButtonWrapper>
    </>
  );
};

export default ItemsContainer;

import Image from "next/image";
import Link from 'next/link';
import { Flex } from "rebass";
import Cart from "shared/images/Cart.svg";
import { useScreenWidth } from "hooks/useScreenWidth";
import { breakpoints } from "shared/theme";
import { NavButton, CartButton } from "./DesktopNav.styled";

const DesktopNav: React.FC = () => {
  const { screenWidth } = useScreenWidth();

  if (screenWidth <= breakpoints.m.min) return null;

  return (
    <Flex alignItems="center">
      <NavButton>PRODUCTS</NavButton>
      <NavButton>NEWS</NavButton>
      <NavButton>CONTACT</NavButton>
      <Link href="/checkout">
        <CartButton>
          <Image src={Cart} alt="cart" width={20} height={17} />
        </CartButton>
      </Link>
    </Flex>
  );
};

export default DesktopNav;

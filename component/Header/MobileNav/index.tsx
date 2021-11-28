import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { Box } from "rebass";
import HamburgerMenu from "shared/images/HamburgerMenu.svg";
import Cart from "shared/images/Cart.svg";
import { useScreenWidth } from "hooks/useScreenWidth";
import { breakpoints, spacing } from "shared/theme";
import { Wrapper, Overlay, NavContainer, NavButton, CartButton } from "./MobileNav.styled";

const MobileNav: React.FC = () => {
  const [isShowNav, setIsShowNav] = useState<boolean>(false);
  const { screenWidth } = useScreenWidth();

  if (screenWidth > breakpoints.m.min) return null;

  return (
    <>
      <Wrapper
        onClick={() => {
          setIsShowNav(true);
        }}
      >
        <Box mr={spacing(2)}>MENU</Box>
        <Image src={HamburgerMenu} alt="menu" width={18} height={18} />
      </Wrapper>
      {isShowNav && (
        <Overlay
          onClick={() => {
            setIsShowNav(false);
          }}
        >
          <NavContainer>
            <NavButton>PRODUCTS</NavButton>
            <NavButton>NEWS</NavButton>
            <NavButton>CONTACT</NavButton>
            <Link href="/checkout">
              <CartButton>
                <Image src={Cart} alt="cart" width={20} height={17} />
              </CartButton>
            </Link>
          </NavContainer>
        </Overlay>
      )}
    </>
  );
};

export default MobileNav;

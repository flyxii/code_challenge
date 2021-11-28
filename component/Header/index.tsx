import Image from "next/image";
import Link from 'next/link';
import Logo from "shared/images/Logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Wrapper, LogoWrapper } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link href="/">
        <LogoWrapper>
          <Image src={Logo} alt="logo" className={"logo"} />
        </LogoWrapper>
      </Link>
      <DesktopNav />
      <MobileNav />
    </Wrapper>
  );
};

export default Header;

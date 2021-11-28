import Image from "next/image";
import { Box, Flex } from "rebass";
import Logo from "shared/images/Logo.svg";
import Google from "shared/images/Google.svg";
import Facebook from "shared/images/Facebook.svg";
import Instagram from "shared/images/Instagram.svg";
import Twitter from "shared/images/Twitter.svg";
import { Wrapper, Button, SnsButton, FooterText } from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Box width={[1, 1 / 12]}>
        <Image src={Logo} alt="Logo" width={60} height={20} />
      </Box>
      <Flex width={[1, 9 / 12]} flexDirection="column" alignItems="flex-start" mt={[16, 0]}>
        <Button>PRODUCTS</Button>
        <Button>NEWS</Button>
        <Button>CONTACT</Button>
        <Button>YOUR CART</Button>
      </Flex>
      <Box width={[1, 2 / 12]}>
        <Flex alignItems="center" justifyContent="space-between" width={[1 / 2, 1]}>
          <SnsButton>
            <Image src={Google} alt="Google" />
          </SnsButton>
          <SnsButton>
            <Image src={Facebook} alt="Facebook" />
          </SnsButton>
          <SnsButton>
            <Image src={Instagram} alt="Instagram" />
          </SnsButton>
          <SnsButton>
            <Image src={Twitter} alt="Twitter" />
          </SnsButton>
        </Flex>
        <FooterText mt={20}>Privacy Policy</FooterText>
        <FooterText>&copy; 2017 Google. All Rights Reserved</FooterText>
      </Box>
    </Wrapper>
  );
};

export default Footer;

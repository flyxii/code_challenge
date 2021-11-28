import Image from "next/image";
import Hero from "shared/images/Hero.png";
import { Wrapper } from "./HeroImage.styled";

const HeroImage: React.FC = () => {
  return (
    <Wrapper height={["320px", "520px", "768px"]}>
      <Image src={Hero} alt="Hero Image" layout="fill" objectFit="cover" />
    </Wrapper>
  );
};

export default HeroImage;

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Box, Flex } from "rebass";
import Button from "component/UI/Button";
import SubImage from "shared/images/SubImage.png";
import { fadeIn, slideOut } from "shared/animte";
import { ImageWrapper, ImageOverlay, ContentWrapper, TextWrapper, ButtonWrapper } from "./TwoColSection.styled";

const TwoColSection: React.FC = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const captionRef = useRef(null);
  const buttonRef = useRef(null);

  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 0.7,
  });

  useEffect(() => {
    if (imageRef.current && inView) {
      slideOut(imageRef.current!);
    }

    if (titleRef.current && inView) {
      fadeIn(titleRef.current!, 0);
    }

    if (captionRef.current && inView) {
      fadeIn(captionRef.current!, 0.2);
    }

    if (buttonRef.current && inView) {
      fadeIn(buttonRef.current!, 0.4);
    }
  }, [inView]);

  return (
    <Flex flexWrap="wrap" flexDirection={["column-reverse", null, "initial"]} ref={ref}>
      <ImageWrapper>
        <ImageOverlay ref={imageRef} />
        <Image src={SubImage} alt="Section Image" layout="fill" objectFit="cover" />
      </ImageWrapper>
      <ContentWrapper>
        <Box>
          <TextWrapper fontSize={[28, 34]} ref={titleRef}>
            The imaginative application of art and science.
          </TextWrapper>
          <TextWrapper fontSize={[16]} mt={3} ref={captionRef}>
            We architect, design and deliver iconic experiences, services and products that improve people’s lives.
          </TextWrapper>
          <ButtonWrapper ref={buttonRef}>
            <Button label="READ LATEST" />
          </ButtonWrapper>
        </Box>
      </ContentWrapper>
    </Flex>
  );
};

export default TwoColSection;

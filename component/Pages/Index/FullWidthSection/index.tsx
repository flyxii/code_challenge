import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Button from "component/UI/Button";
import { Wrapper, TextWrapper, ButtonWrapper } from "./FullWidthSection.styled";
import { fadeIn } from "shared/animte";

const FullWidthSection: React.FC = () => {
  const titleRef = useRef(null);
  const captionRef = useRef(null);
  const buttonRef = useRef(null);

  const { ref, inView } = useInView({
    rootMargin: "0px",
    threshold: 0.7,
  });

  useEffect(() => {
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
    <Wrapper ref={ref}>
      <TextWrapper fontSize={[28, 34]} ref={titleRef}>
        Innovation and experience design agency.
      </TextWrapper>
      <TextWrapper fontSize={[16]} mt={3} ref={captionRef}>
        Apps is an innovation and experience design agency. <br />
        We exist to create a better future with you.
      </TextWrapper>
      <ButtonWrapper ref={buttonRef}>
        <Button label="PRODUCTS" />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default FullWidthSection;

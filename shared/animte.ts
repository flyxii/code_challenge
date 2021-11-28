import gsap from "gsap";

export const fadeIn = (ele: JSX.Element, delay: number): void => {
    gsap.to(ele, 1, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        delay: delay,
        stagger: {
            amount: 0.3,
        }
    });
}

export const slideOut = (ele: JSX.Element): void => {
  gsap.to(ele, 1, {
    height: 0,
    ease: "power4.out",
    duration: 0.7,
  });
};
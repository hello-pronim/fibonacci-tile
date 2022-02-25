// import css from "@styled-system/css";
// import Image from "next/image";
// import Slider from "react-slick";
// import Text from "@components/common/typography";
// import AccentText, { AccentTextMobile } from "@components/common/accentText";
// import { Container, ImageWrapper, TextWrapper } from "./styles";

// const SocialModule = ({ instaFeed }) => {
//   return (
//     <Container>
//       <AccentText top={120}>Instagram</AccentText>
//       <AccentTextMobile css={css({ pb: 80, gridColumn: "1/span 6" })}>
//         Instagram
//       </AccentTextMobile>
//       <ImageWrapper>
//         <Slider {...settings}>
//           {instaFeed.map((ig: any) => (
//             <Image
//               key={`ig-${ig.shortcode}`}
//               alt={"Instagram @fibonaccistone"}
//               src={ig.image}
//               width={292}
//               height={292}
//               layout="fixed"
//             />
//           ))}
//         </Slider>
//       </ImageWrapper>
//     </Container>
//   );
// };

// export default SocialModule;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { css } from "@styled-system/css";
import Text from "@components/common/typography";
import { useAppContext } from "@contexts/AppContext";
import Container from "@components/common/layout/container";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import {
  Wrapper,
  ProgBar,
  ProgBarInner,
  ProgBarText,
  BottomBarInner,
  LinkWrapper,
  LinkText,
  BottomBar,
  NextWrapper,
  TextWrapper,
  Title,
} from "./styles";

const SocialModule = ({ instaFeed }) => {
  const { state, dispatch } = useAppContext();
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };
  var scrollCompletion = (currentSlide / slideCount) * 100;

  useEffect(() => {
    setCurrentSlide(
      slider.current && slider.current.innerSlider.state.currentSlide + 5
    );
    setSlideCount(
      slider.current && slider.current.innerSlider.state.slideCount
    );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 5);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <AccentText top={160}>Instagram</AccentText>
      <Wrapper>
        <AccentTextMobile css={css({ pb: 42 })}>Instagram</AccentTextMobile>
        <Slider {...settings} ref={slider}>
          {instaFeed.map((ig: any) => (
            <Image
              key={`ig-${ig.shortcode}`}
              alt={"Instagram @fibonaccistone"}
              src={ig.image}
              width={292}
              height={292}
              layout="fixed"
            />
          ))}
        </Slider>
        <TextWrapper>
          <Text as="p" variant="Body-Small">
            Follow us on instagram{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/fibonaccistone"
            >
              @fibonaccistone
            </a>
          </Text>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default SocialModule;

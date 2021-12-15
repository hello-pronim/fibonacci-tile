import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Text from "@components/common/typography";
import Slide1 from "public/assets/temp/project-slide-1.jpg";
import Slide1Mobile from "public/assets/temp/project-slide-mobile.jpg";
import AccentText, {AccentTextMobile} from "@components/common/accentText";
import AddIcon from "@components/icons/add";
import Link from "next/link";
import Arrow from "@components/common/icons/arrow";
import {
  Container,
  Wrapper,
  ProgBar,
  ProgBarInner,
  BottomBarInner,
  SlideItem,
  LinkWrapper,
  BottomBar,
  ContentWrapper,
  Pill,
  SlideImage,
  SlideImageMobile,
} from "./styles";
import { css } from "@styled-system/css";
import theme from "styles/theme";

const InlineSlider = () => {
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  var scrollCompletion = (currentSlide / slideCount) * 100;

  useEffect(() => {
    setCurrentSlide(
      slider.current && slider.current.innerSlider.state.currentSlide + 1
    );
    setSlideCount(
      slider.current && slider.current.innerSlider.state.slideCount
    );
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 1);
    },
  };

  return (
    <Container>
      <AccentText top={206}>An imaginative selection</AccentText>
      <Wrapper>
        <AccentTextMobile css={css({pb: 80})}>An imaginative selection</AccentTextMobile>
        <Slider {...settings} ref={slider}>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="1460"
                height="900"
              />
            </SlideImage>
            <SlideImageMobile>
              <Image
                src={Slide1Mobile}
                alt="image-1"
                layout="responsive"
                width="343"
                height="476"
              />
            </SlideImageMobile>
            <ContentWrapper className="slide-content">
              <Pill>
                <AddIcon color="white" />
                New Release
              </Pill>
              <Text as="h6" variant="Body-Large" color="stone">
                City, Country
              </Text>
              <Text as="h3" variant="Display-Large" color="white">
                Project Name <br />
                Project Name
              </Text>
              <LinkWrapper>
                <Link href="#">View project</Link>
                <Arrow type="short" color={theme.colors.white} />
              </LinkWrapper>
            </ContentWrapper>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="1460"
                height="900"
              />
            </SlideImage>
            <SlideImageMobile>
              <Image
                src={Slide1Mobile}
                alt="image-1"
                layout="responsive"
                width="343"
                height="476"
              />
            </SlideImageMobile>
            <ContentWrapper className="slide-content">
              <Pill>
                <AddIcon color="white" />
                New Release
              </Pill>
              <Text as="h6" variant="Body-Large" color="stone">
                City, Country
              </Text>
              <Text as="h3" variant="Display-Large" color="white">
                Project Name <br />
                Project Name
              </Text>
              <LinkWrapper>
                <Link href="#">View project</Link>
                <Arrow type="short" color={theme.colors.white} />
              </LinkWrapper>
            </ContentWrapper>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="1460"
                height="900"
              />
            </SlideImage>
            <SlideImageMobile>
              <Image
                src={Slide1Mobile}
                alt="image-1"
                layout="responsive"
                width="343"
                height="476"
              />
            </SlideImageMobile>
            <ContentWrapper className="slide-content">
              <Pill>
                <AddIcon color="white" />
                New Release
              </Pill>
              <Text as="h6" variant="Body-Large" color="stone">
                City, Country
              </Text>
              <Text as="h3" variant="Display-Large" color="white">
                Project Name <br />
                Project Name
              </Text>
              <LinkWrapper>
                <Link href="#">View project</Link>
                <Arrow type="short" color={theme.colors.white} />
              </LinkWrapper>
            </ContentWrapper>
          </SlideItem>
          <SlideItem>
            <SlideImage>
              <Image
                src={Slide1}
                alt="image-1"
                layout="responsive"
                width="1460"
                height="900"
              />
            </SlideImage>
            <SlideImageMobile>
              <Image
                src={Slide1Mobile}
                alt="image-1"
                layout="responsive"
                width="343"
                height="476"
              />
            </SlideImageMobile>
            <ContentWrapper className="slide-content">
              <Pill>
                <AddIcon color="white" />
                New Release
              </Pill>
              <Text as="h6" variant="Body-Large" color="stone">
                City, Country
              </Text>
              <Text as="h3" variant="Display-Large" color="white">
                Project Name <br />
                Project Name
              </Text>
              <LinkWrapper>
                <Link href="#">View project</Link>
                <Arrow type="short" color={theme.colors.white} />
              </LinkWrapper>
            </ContentWrapper>
          </SlideItem>
        </Slider>
        <BottomBar>
          <ProgBar>
            <ProgBarInner css={css({ width: scrollCompletion + "%" })} />
          </ProgBar>
          <BottomBarInner>
            <span>
              {currentSlide} of {slideCount}
            </span>
            <LinkWrapper>
              <Link href="#">Explore all projects</Link>
              <Arrow type="short" />
            </LinkWrapper>
          </BottomBarInner>
        </BottomBar>
      </Wrapper>
    </Container>
  );
};

export default InlineSlider;

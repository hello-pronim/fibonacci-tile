import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import { css } from '@styled-system/css';
import Text from '@components/common/typography';
import AccentText, { AccentTextMobile } from '@components/common/accentText';
import AddIcon from '@components/icons/add';
import SliderArrow from '@components/common/icons/sliderArrow';
import Arrow from '@components/common/icons/arrow';
import theme from 'styles/theme';
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
  NextWrapper,
  PreviousWrapper
} from './styles';

const InlineSlider = ({ projects }) => {
  const slider = React.useRef<Slider>(null);
  const [slideCount, setSlideCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  var scrollCompletion = (currentSlide / slideCount) * 100;

  const gotoPrevious = () => {
    slider.current !== null && slider.current.slickPrev();
  }

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };

  useEffect(() => {
    setCurrentSlide(
      slider.current && slider.current.innerSlider.state.currentSlide + 2
    );
    setSlideCount(
      // slider.current && slider.current.innerSlider.state.slideCount
      projects?.length
    );
  }, []);

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   pauseOnHover: false,
  //   autoplaySpeed: 10000,
  //   beforeChange: (current: number, next: number) => {
  //     setCurrentSlide(next + 1);
  //   },
  // };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 10000,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next + 1);
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
    ],
  };

  return (
    <Container>
      <AccentText top={40}>An imaginative selection</AccentText>
      <Wrapper>
        <AccentTextMobile css={css({ pb: 80 })}>
          An imaginative selection
        </AccentTextMobile>
        <Slider {...settings} ref={slider}>
          {projects.map((project: any) => (
            <SlideItem key={`project-${project.id}`}>
              {project?.heroImageThumb?.[0]?.url && (
                <SlideImage>
                  <Image
                    placeholder="blur"
                    blurDataURL={project.blurThumb[0].url}
                    src={project.heroImageThumb[0].url}
                    alt={project.heroImageThumb[0].title}
                    layout="responsive"
                    width={project.heroImageThumb[0].width}
                    height={project.heroImageThumb[0].height}
                  />
                </SlideImage>
              )}
              {project?.heroMobImageThumb?.[0]?.url && (
                <SlideImageMobile>
                  <Image
                    placeholder="blur"
                    blurDataURL={project.heroMobImageThumb[0].url}
                    src={project.heroMobImageThumb[0].url}
                    alt={project.heroMobImageThumb[0].title}
                    layout="responsive"
                    width={project.heroMobImageThumb[0].width}
                    height={project.heroMobImageThumb[0].height}
                  />
                </SlideImageMobile>
              )}
              <ContentWrapper className="slide-content">
                <Pill>
                  <AddIcon color="white" />
                  {project.label}
                </Pill>
                <Text as="h6" variant="Body-Large" color="stone">
                  {project.location}
                </Text>
                <Text as="h3" variant="Display-Large" color="white">
                  {project.title}
                </Text>
                <LinkWrapper>
                  <Link href={`/in-use/${project.slug}`}>View project</Link>
                  <Arrow type="short" color={theme.colors.white} />
                </LinkWrapper>
              </ContentWrapper>
            </SlideItem>
          ))}
        </Slider>
        <BottomBar>
          <ProgBar>
            <ProgBarInner css={css({ width: scrollCompletion + '%' })} />
          </ProgBar>
          <BottomBarInner>
            <span>
              {currentSlide} of {slideCount}
            </span>
            <LinkWrapper>
              <Link href="/in-use">Explore all projects</Link>
            </LinkWrapper>
          </BottomBarInner>
        </BottomBar>
      </Wrapper>
      <PreviousWrapper onClick={() => gotoPrevious()}>
        <SliderArrow direction='left' color={theme.colors.white} width={40} />
      </PreviousWrapper>
      <NextWrapper onClick={() => gotoNext()}>
        <SliderArrow color={theme.colors.white} width={40} />
      </NextWrapper>
    </Container>
  );
};

export default InlineSlider;

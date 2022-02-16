import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Slider from "react-slick";
import Image from "next/image";
import Arrow from "@components/common/icons/arrow";
import {
  BannerTextWrapper,
  BannerDescription,
  BannerHeading,
  BannerSubHeading,
  Container,
  SliderItem,
  SliderWrapper,
  LinkWrapper,
} from "./styles";

function TopSlider({ items = [], disableNext = false }) {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: true,
    speed: 500,
    arrows: false,
  };

  const slider = useRef<Slider>(null);

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };

  return (
    <Container>
      <SliderWrapper>
        <Slider {...settings} ref={slider}>
          {items.map((item, index) => (
            <SliderItem
              key={`slide-item-${index}`}
              onClick={() => {
                if (!disableNext) gotoNext();
                if (item.bannerLinkTo) {
                  router.push(item.bannerLinkTo);
                }
              }}
            >
              <Image
                src={item.bannerImage.url}
                alt={item.bannerImage.title}
                width={item.bannerImage.width}
                height={item.bannerImage.height}
                layout="responsive"
              />
              <BannerTextWrapper>
                <BannerSubHeading>{item.bannerIntro}</BannerSubHeading>
                <BannerHeading>{item.bannerHeading}</BannerHeading>
                <BannerDescription>
                  {!item.bannerLinkTo && (
                    <span
                      dangerouslySetInnerHTML={{ __html: item.bannerSubline }}
                    />
                  )}
                  {item.bannerCTA && item.bannerLinkTo && (
                    <LinkWrapper>
                      <Link href={item.bannerLinkTo}>{item.bannerCTA}</Link>
                      <Arrow type="short" color="white" />
                    </LinkWrapper>
                  )}
                </BannerDescription>
              </BannerTextWrapper>
            </SliderItem>
          ))}
        </Slider>
      </SliderWrapper>
    </Container>
  );
}

export default TopSlider;

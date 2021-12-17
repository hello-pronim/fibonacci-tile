import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "public/banner1.jpg";
import Slide2 from "public/banner2.jpg";
import styles from "./styles.module.scss";
import { css } from "@styled-system/css";

function TopSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: true,
    speed: 500,
    arrows: false,
  };

  const slider = React.useRef<Slider>(null);

  const gotoNext = () => {
    slider.current !== null && slider.current.slickNext();
  };

  console.log(slider.current);
  return (
    <section css={css({width: '100%', overflow: 'hidden'})}>
      <div className={styles.container} css={css({'.slick-list': {overflow: 'visible'}})}>
      <Slider {...settings} ref={slider}>
        <div className={styles.slideItem} onClick={() => gotoNext()}>
          <Image src={Slide1} alt="image-1" width={3080} height={1410} layout="responsive" />
          <div className={styles.bannerTextWrapper}>
            <h3 className={styles.bannerSubHeading}>VIEW OUR</h3>
            <h2 className={styles.bannerHeading}>Terrazzo</h2>
            <p className={styles.bannerDescription}>
              40 unique creations. Thoughtfully designed. <br/> Sustainably made. Purpose-built.
            </p>
          </div>
        </div>
        <div className={styles.slideItem} onClick={() => gotoNext()}>
          <Image src={Slide2} alt="image-2" />
          <div className={styles.bannerTextWrapper}>
            <h3 className={styles.bannerSubHeading}>VIEW OUR</h3>
            <h2 className={styles.bannerHeading}>Collection</h2>
            <p className={styles.bannerDescription}>
              5 unique collections. Thoughtfully designed.<br/> Sustainably made. Purpose-built.
            </p>
          </div>
        </div>
      </Slider>
      </div>
    </section>
  );
}

export default TopSlider;

import Slider from "react-slick";
import Image from "next/image";
import Slide1 from "public/banner1.jpg";
import Slide2 from "public/banner2.jpg";
import styles from "./styles.module.scss";

function TopSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 2000,
    arrows: false,
  };
  return (
    <section className={styles.container}>
      <Slider {...settings}>
        <div className={styles.slideItem}>
          <Image src={Slide1} alt="image-1" />
          <div className={styles.bannerTextWrapper}>
            <h3 className={styles.bannerSubHeading}>VIEW OUR</h3>
            <h2 className={styles.bannerHeading}>Terrazzo</h2>
            <p className={styles.bannerDescription}>
              40 unique creations. Thoughtfully designed. Sustainably made. Purpose-built.
            </p>
          </div>
        </div>
        <div className={styles.slideItem}>
          <Image src={Slide2} alt="image-2" />
          <div className={styles.bannerTextWrapper}>
            <h3 className={styles.bannerSubHeading}>VIEW OUR</h3>
            <h2 className={styles.bannerHeading}>Collection</h2>
            <p className={styles.bannerDescription}>
              5 unique collections. Thoughtfully designed. Sustainably made. Purpose-built.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default TopSlider;

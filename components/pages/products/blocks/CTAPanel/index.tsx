import Image from "next/image";
// import Text from "@components/common/typography";
import ArrowButton from "@components/common/button/arrowButton";
import CTAImage from "public/tmp/featured.png";
import styles from "./styles.module.scss";
import classNames from "classnames";

const CTAPanel = ({ imagePosition = "left" }) => {
  return (
    <section className={styles.ctaContainer}>
      <div
        className={classNames(styles.imgContainer, {
          [styles.leftImg]: imagePosition === "left",
          [styles.rightImg]: imagePosition === "right",
        })}
      >
        <Image src={CTAImage} alt="CTA-1" />
      </div>
      <div className={styles.ctaDetails}>
        <h2>Samples Right now</h2>
        <p>
          Select your samples before 4pm for immediate dispatch and next working
          day delivery to Melbourne metropolitan and 1-2 days interstate.
        </p>
        <p>
          Remember, the more we know about your project, the better we can help
          you specify the perfect product, so feel free to overshare.
        </p>
        <ArrowButton
          mode="dark"
          title="How to order samples"
          link="http://localhost:3000/products"
        />
      </div>
    </section>
  );
};

export default CTAPanel;

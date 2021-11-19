import Image from "next/image";
// import Text from "@components/common/typography";
import Button from "@components/common/button";
import CTAImage from "public/tmp/featured.png";
import styles from "./styles.module.scss";

const CTAPanel = ({ imagePosition = "left" }) => {
  return (
    <section className={styles.ctaContainer}>
      {imagePosition === 'left' && <Image src={CTAImage} alt="CTA-1" /> }
      <div className={styles.ctaDetails}>
       <h2>
          Samples Right now
        </h2>
        <p>Select your samples before 4pm for immediate dispatch and next working 
          day delivery to Melbourne metropolitan and 1-2 days interstate.</p>
        <p>Remember, the more we know about your project, the better we can help you specify the 
          perfect product, so feel free to overshare.</p>
        <Button mode="dark" title="Order samples" link="http://localhost:3000/products" />
      </div>
      {imagePosition === 'right' &&  <Image src={CTAImage} alt="CTA-1" /> }
    </section>
  );
};

export default CTAPanel;

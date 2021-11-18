import Image from "next/image";
import Text from "@components/common/typography";
import CTAImage from "public/tmp/featured.png";
import styles from "./styles.module.scss";

const CTAPanel = () => {
  return (
    <section className={styles.ctaContainer}>
      <Image src={CTAImage} alt="CTA-1" />
      <div>
        <Text Base="h2" variant="Display-Large">
          Samples Right now
        </Text>
      </div>
    </section>
  );
};

export default CTAPanel;

import Image from "next/image";
import Text from "@components/common/typography";
import ProductImg from "public/placeholder-product-image.jpg";
import styles from "./styles.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src={ProductImg} alt="Product-1" />
      <Text
        Base="h3"
        variant="Display-XSmall"
        altFont={true}
      >
        Neues Grey Superfine
      </Text>
      <Text Base="h4" variant="Display-XXSmall">
        Word • Word • Word
      </Text>
    </div>
  );
};

export default ProductCard;

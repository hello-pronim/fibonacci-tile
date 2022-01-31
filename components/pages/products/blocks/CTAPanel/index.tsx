import Image from "next/image";
import classNames from "classnames";
// import Text from "@components/common/typography";
import ArrowButton from "@components/common/button/arrowButton";
import CTAImage from "public/tmp/featured.png";
import { CTAContainer, ImgContainer, CTADetails } from "./styles";

const CTAPanel = ({ imagePosition = "left" }) => {
  return (
    <CTAContainer>
      <ImgContainer position={imagePosition}>
        <Image src={CTAImage} alt="CTA-1" />
      </ImgContainer>
      <CTADetails>
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
          link="/products"
        />
      </CTADetails>
    </CTAContainer>
  );
};

export default CTAPanel;

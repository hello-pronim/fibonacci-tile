import Image from "next/image";
// import Text from "@components/common/typography";
import ArrowButton from "@components/common/button/arrowButton";
import FooterCTAImage from "public/tmp/footerCTA.jpg";
import Text from "@components/common/typography";
import {
  FooterCTAContainer,
  CTAImgBox,
  CTADetails,
  CTADetailsBox,
} from "./styles";

const FooterCTAPanel = () => {
  return (
    <FooterCTAContainer>
      <CTAImgBox>
        <Image src={FooterCTAImage} alt="Footer-CTA-1" />
      </CTAImgBox>
      <CTADetails>
        <CTADetailsBox>
          <Text as="h3" variant="Body-XSmall" marginTop="25px" color="white">
            Didn't find what you were looking for?
          </Text>
          <Text
            as="h2"
            variant="Display-Large"
            altFont={true}
            color="white"
            marginTop="25px"
          >
            We offer custom design solutions
          </Text>
          <Text as="p" variant="Body-Large" marginBottom="80px" color="white">
            Get in touch duis ullamcorper dapibus fermentum. Ut viverra at mi,
            nec. A eget vel imperdiet volutpat lobortis. Hendrerit integer sit
            tempor. t vel imperdiet volutpat
          </Text>
          <ArrowButton
            mode="light"
            title="Contact us today"
            link="http://localhost:3000/products"
          />
        </CTADetailsBox>
      </CTADetails>
    </FooterCTAContainer>
  );
};

export default FooterCTAPanel;

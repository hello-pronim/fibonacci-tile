import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import {
  CustomDesignCTAContainer,
  CTAImgBox,
  CTADetails,
  CTADetailsBox,
} from "./styles";

const CustomDesignCTAPanel = ({ data }) => {
  return (
    <CustomDesignCTAContainer>
      <CTAImgBox>
        <Image src={data.customImage.url} alt="Custom Solutions CTA" />
      </CTAImgBox>
      <CTADetails>
        <CTADetailsBox>
          <Text as="h3" variant="Body-XSmall" marginTop="25px" color="white">
            {data.customIntro}
          </Text>
          <Text
            as="h2"
            variant="Display-Large"
            altFont={true}
            color="white"
            marginTop="25px"
          >
            {data.customHeader}
          </Text>
          <Text as="p" variant="Body-Large" marginBottom="80px" color="white">
            {data.customSolutionsText}
          </Text>
          <ArrowButton
            mode="light"
            title={data.customCtaButton}
            link={data.customCtaLink}
          />
        </CTADetailsBox>
      </CTADetails>
    </CustomDesignCTAContainer>
  );
};

export default CustomDesignCTAPanel;

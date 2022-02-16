import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import {
  CustomSolutionsCTAContainer,
  CTAImgBox,
  CTADetails,
  CTADetailsBox,
} from "./styles";

const CustomSolutionsCTAPanel = ({ data }) => {
  return (
    <CustomSolutionsCTAContainer>
      {data?.customImageThumb?.[0]?.url && (
        <CTAImgBox>
          <Image
            placeholder="blur"
            blurDataURL={data.customImageThumb[0].url}
            src={data.customImageThumb[0].url}
            width={data.customImageThumb[0].width}
            height={data.customImageThumb[0].height}
            alt={data.customImageThumb[0].title}
          />
        </CTAImgBox>
      )}
      <CTADetails backgroundColor={data.backgroundColour}>
        <CTADetailsBox>
          <Text
            as="h3"
            variant="Body-XSmall"
            marginTop="25px"
            color={data.textColour ? data.textColour : "white"}
          >
            {data.customIntro}
          </Text>
          <Text
            as="h2"
            variant="Display-Large"
            altFont={true}
            color={data.textColour ? data.textColour : "white"}
            marginTop="25px"
          >
            {data.customHeader}
          </Text>
          <Text
            as="p"
            variant="Body-Large"
            marginBottom="80px"
            color={data.textColour ? data.textColour : "white"}
          >
            {data.customSolutionsText}
          </Text>
          {data?.customCtaLink?.[0]?.url && (
            <ArrowButton
              mode="light"
              title={data.customCtaButton}
              link={data?.customCtaLink?.[0]?.url}
            />
          )}
        </CTADetailsBox>
      </CTADetails>
    </CustomSolutionsCTAContainer>
  );
};

export default CustomSolutionsCTAPanel;

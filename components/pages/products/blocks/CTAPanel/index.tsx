import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import {
  CTAContainer,
  CTAHeaderText,
  CTAHeaderTextWrapper,
  CTAIntroWrapper,
  ImgContainer,
  CTADetails,
} from "./styles";

const CTAPanel = ({ imagePosition = "left", data }) => {
  return (
    <CTAContainer>
      {data?.samplesImageThumb?.[0]?.url && (
        <ImgContainer position={imagePosition}>
          <Image
            placeholder="blur"
            blurDataURL={data.blurThumb[0].url}
            src={data.samplesImageThumb[0].url}
            alt={data.samplesImageThumb[0].title}
            width={data.samplesImageThumb[0].width}
            height={data.samplesImageThumb[0].height}
          />
        </ImgContainer>
      )}
      <CTADetails position={imagePosition}>
        {data?.samplesHeading && (
          <CTAHeaderTextWrapper>
            <CTAHeaderText variant="Display-Large">
              {data.samplesHeading}
            </CTAHeaderText>
          </CTAHeaderTextWrapper>
        )}
        <CTAIntroWrapper>
          <Text
            variant="Body-Regular"
            dangerouslySetInnerHTML={{ __html: data.samplesIntro }}
          />
        </CTAIntroWrapper>
        {data?.samplesButtonLink?.[0]?.slug && (
          <ArrowButton
            mode="dark"
            title={data.samplesButton}
            link={`/${data?.samplesButtonLink?.[0]?.slug}`}
          />
        )}
      </CTADetails>
    </CTAContainer>
  );
};

export default CTAPanel;

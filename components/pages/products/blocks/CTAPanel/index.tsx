import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import { CTAContainer, ImgContainer, CTADetails } from "./styles";

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
      <CTADetails>
        {data?.samplesHeading && <h2>{data.samplesHeading}</h2>}
        <div dangerouslySetInnerHTML={{ __html: data.samplesIntro }} />
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

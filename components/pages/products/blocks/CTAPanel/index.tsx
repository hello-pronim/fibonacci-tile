import Image from "next/image";
import ArrowButton from "@components/common/button/arrowButton";
import { CTAContainer, ImgContainer, CTADetails } from "./styles";

const CTAPanel = ({ imagePosition = "left", data }) => {
  return (
    <CTAContainer>
      {data?.samplesImage?.length > 0 && (
        <ImgContainer position={imagePosition}>
          <Image
            src={data.samplesImage[0].url}
            alt={data.samplesImage[0].title}
            width={data.samplesImage[0].width}
            height={data.samplesImage[0].height}
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

import Image from "next/image";
import classNames from "classnames";
// import Text from "@components/common/typography";
import ArrowButton from "@components/common/button/arrowButton";
import CTAImage from "public/tmp/featured.png";
import { CTAContainer, ImgContainer, CTADetails } from "./styles";

const CTAPanel = ({ imagePosition = "left", data }) => {
  return (
    <CTAContainer>
      {data?.samplesImage?.length > 0 &&
      <ImgContainer position={imagePosition}>
        <Image 
        src={data.samplesImage[0].url} alt={`CTA-${data.id}`} 
        width={data.samplesImage[0].width}
        height={data.samplesImage[0].height}
        />
      </ImgContainer>
      }
      <CTADetails>
        {data?.samplesHeading && <h2>{data.samplesHeading}</h2>}
        <div dangerouslySetInnerHTML={{__html: data.samplesIntro}}/>
        <ArrowButton
          mode="dark"
          title={data.samplesButton}
          link="/terrazzo"
        />
      </CTADetails>
    </CTAContainer>
  );
};

export default CTAPanel;

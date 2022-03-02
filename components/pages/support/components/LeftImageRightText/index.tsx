import Image from "next/image";
import {
  Container,
  Wrapper,
  ImageWrapper,
  Panel,
  PanelLeft,
  PanelRight,
} from "./styles";

const LeftImageRightText = ({ data }) => {

  return (
    <Panel>
      <Container>
        <Wrapper>
          <PanelLeft>
            {data?.thumbnail?.[0]?.url && (
              <ImageWrapper>
                <Image
                  className="image"
                  placeholder="blur"
                  blurDataURL={data.blurThumb[0].url}
                  src={data.thumbnail[0].url}
                  alt={data.thumbnail[0].title}
                  width={data.thumbnail[0].width}
                  height={data.thumbnail[0].height}
                  layout="responsive"
                  objectFit="cover"
                />
              </ImageWrapper>
            )}
          </PanelLeft>
          <PanelRight>
            <h2>{data.textHeading}</h2>
            <span dangerouslySetInnerHTML={{ __html: data.text }} />
          </PanelRight>
        </Wrapper>
      </Container>
    </Panel>
  );
};

export default LeftImageRightText;

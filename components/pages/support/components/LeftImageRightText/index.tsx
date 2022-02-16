import Image from "next/image";
import {Container, Wrapper, Panel, PanelLeft, PanelRight } from "./styles";

const LeftImageRightText = ({ data }) => {
  return (
    <Panel>
      <Container>
        <Wrapper>
          <PanelLeft>
            {data?.thumbnail?.[0]?.url && (
              <Image
                placeholder="blur"
                blurDataURL={data.thumbnail[0].url}
                src={data.thumbnail[0].url}
                alt={data.thumbnail[0].title}
                width={data.thumbnail[0].width}
                height={data.thumbnail[0].height}
                layout="responsive"
              />
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

import Image from "next/image";
import { Panel, PanelLeft, PanelRight } from "./styles";

const LeftImageRightText = ({ data }) => {
  return (
    <Panel>
      <PanelLeft>
        {data?.thumbnail?.[0]?.url && (
          <Image
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
    </Panel>
  );
};

export default LeftImageRightText;

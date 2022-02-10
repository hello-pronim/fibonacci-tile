import Image from "next/image";
import AccentText from "@components/common/accentText";
import {
  Panel,
  PanelLeft,
  PanelRight,
  StoryTitleWrapper,
  StoryContentWrapper,
  StoryImageWrapper,
} from "./styles";

interface storyPanelProps {
  story: any;
  accentText?: string;
}

function HeadingLeftTextRight({ story }: storyPanelProps) {
  return (
    <Panel>
      <PanelLeft>
        {story.accentText && (
          <AccentText top={120}>{story.accentText}</AccentText>
        )}
        <StoryTitleWrapper>
          <h4 dangerouslySetInnerHTML={{ __html: story.title }} />
        </StoryTitleWrapper>
      </PanelLeft>
      <PanelRight>
        <StoryContentWrapper
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
        {story?.thumbnail?.[0]?.url && (
          <StoryImageWrapper>
            <Image
              src={story.thumbnail[0].url}
              alt={story.thumbnail[0].title}
              width={story.thumbnail[0].width}
              height={story.thumbnail[0].height}
              layout="responsive"
            />
          </StoryImageWrapper>
        )}
      </PanelRight>
    </Panel>
  );
}

export default HeadingLeftTextRight;

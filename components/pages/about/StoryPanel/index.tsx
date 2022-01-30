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

function StoryPanel({ story }: storyPanelProps) {
  return (
    <Panel>
      <PanelLeft>
        {story.accentText && (
          <AccentText top={120}>{story.accentText}</AccentText>
        )}
        <StoryTitleWrapper>{story.title}</StoryTitleWrapper>
      </PanelLeft>
      <PanelRight>
        <StoryContentWrapper
          dangerouslySetInnerHTML={{ __html: story.content }}
        />
        {story.thumbnail && (
          <StoryImageWrapper>
            <Image
              src={story.thumbnail}
              alt="story-thumbnail"
              layout="responsive"
            />
          </StoryImageWrapper>
        )}
      </PanelRight>
    </Panel>
  );
}

export default StoryPanel;

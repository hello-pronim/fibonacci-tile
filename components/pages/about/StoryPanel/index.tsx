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
  titleClassName?: string;
  story: any;
}

function StoryPanel({ story, titleClassName = "" }: storyPanelProps) {
  return (
    <Panel>
      <PanelLeft>
        {story.accentText && (
          <AccentText top={120}>{story.accentText}</AccentText>
        )}
        {story.title && (
          <StoryTitleWrapper>
            <h4
              className={titleClassName}
              dangerouslySetInnerHTML={{ __html: story.title }}
            />
          </StoryTitleWrapper>
        )}
      </PanelLeft>
      <PanelRight>
        {story.content && (
          <StoryContentWrapper
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        )}
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

export default StoryPanel;

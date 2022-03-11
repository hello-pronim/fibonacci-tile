import Image from "next/image";
import AccentText from "@components/common/accentText";
import Text from "@components/common/typography";
import richTextRenderer from "@utils/richTextRenderer";
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
            <Text as="h4" variant="Display-Medium"
              className={titleClassName}
              dangerouslySetInnerHTML={{ __html: story.title }}
            />
          </StoryTitleWrapper>
        )}
      </PanelLeft>
      <PanelRight>
        {story.content && (
          <StoryContentWrapper>
            {richTextRenderer(story.content)}
          </StoryContentWrapper>
        )}
        {story?.thumbnail?.[0]?.url && (
          <StoryImageWrapper>
            <Image
              className="image"
              placeholder="blur"
              blurDataURL={story.blurThumb[0].url}
              src={story.thumbnail[0].url}
              alt={story.thumbnail[0].title}
              width={story.thumbnail[0].width}
              height={story.thumbnail[0].height}
              objectFit="cover"
              layout="responsive"
            />
          </StoryImageWrapper>
        )}
      </PanelRight>
    </Panel>
  );
}

export default StoryPanel;

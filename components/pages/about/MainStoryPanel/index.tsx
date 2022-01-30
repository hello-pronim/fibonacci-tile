import Image from "next/image";
import AccentText from "@components/common/accentText";
import {
  Panel,
  Container,
  StoryTitleWrapper,
  StoryTitle,
  StorySubTitle,
  StoryImageWrapper,
  StoryContentWrapper,
  StoryContentWrapperLeft,
  StoryContentWrapperRight,
} from "./styles";

interface mainStoryPanelProps {
  story: any;
}

function MainStoryPanel({ story }: mainStoryPanelProps) {
  return (
    <Panel>
      {story.accentText && (
        <AccentText top={120}>{story.accentText}</AccentText>
      )}
      <Container>
        <StoryTitleWrapper>
          <StoryTitle>{story.title}</StoryTitle>
          {story.subTitle && <StorySubTitle>{story.subTitle}</StorySubTitle>}
        </StoryTitleWrapper>
        {story.thumbnail && (
          <StoryImageWrapper>
            <Image
              src={story.thumbnail}
              alt="story-thumbnail"
              layout="responsive"
            />
          </StoryImageWrapper>
        )}
        <StoryContentWrapper>
          <StoryContentWrapperLeft></StoryContentWrapperLeft>
          <StoryContentWrapperRight
            dangerouslySetInnerHTML={{ __html: story.content }}
          ></StoryContentWrapperRight>
        </StoryContentWrapper>
      </Container>
    </Panel>
  );
}

export default MainStoryPanel;

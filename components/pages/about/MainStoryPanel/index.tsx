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
          <StoryTitle>
            <h4>{story.title}</h4>
          </StoryTitle>
          {story.subTitle && (
            <StorySubTitle>
              <h4>{story.subTitle}</h4>
            </StorySubTitle>
          )}
        </StoryTitleWrapper>
        {story?.thumbnail?.[0]?.url > 0 && (
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

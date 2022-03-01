import GenericHeader from "./Header";
import { Container, InnerContainer, PageTitle } from "./styles";

const GenericPage = ({ pageData, notifications }) => {
  return (
    <Container>
      <GenericHeader mode="dark" notifications={notifications} />
      <InnerContainer>
        <div className="titleContentBlock">
          {pageData?.title && (
            <PageTitle as="h2" variant="Display-Large">
              {pageData.title}
            </PageTitle>
          )}
        </div>
        <div className="detailsContentBlock">
          {pageData?.pageContent && (
            <div dangerouslySetInnerHTML={{ __html: pageData.pageContent }}></div>
          )}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default GenericPage;

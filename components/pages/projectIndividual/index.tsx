import QuoteModule from "@components/modules/quote";
import Hero from "./hero";
import BodyContent from "./bodyContent";
import FeaturedProducts from "./featuredProducts";

const ProjectPage = ({ project }) => {
  const { projectComponents, backgroundColor, featuredProducts } = project;

  return (
    <>
      <Hero project={project} />
      {projectComponents?.length > 0 && (
        <BodyContent
          backgroundColor={backgroundColor}
          projectComponents={projectComponents}
        />
      )}
      <FeaturedProducts products={featuredProducts} />
      <QuoteModule source="Rebeka Morgan, Build Her Collective">
        ‘It certainly helps from a planning and ordering perspective that
        Fibonacci Stone carry so much stock.’
      </QuoteModule>
    </>
  );
};
export default ProjectPage;

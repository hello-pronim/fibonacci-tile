import { gql } from "@apollo/client";

export const PageQuery = gql`
  query PageQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      title
      slug
      ... on inUse_inUse_Entry {
        pageIntro
        pageHeading
      }
    }
  }
`;

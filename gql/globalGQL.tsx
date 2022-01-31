import { gql } from "@apollo/client";

export const GlobalSpecificationQuery = gql`
query GlobalSpecificationQuery {
    globalSets {
      ... on specifications_GlobalSet {
        technicalSpecifications {
          ... on technicalSpecifications_technicalSpecifications_BlockType {
            id
            specificationsTitle
            specifications
          }
        }
      }
    }
}
`;

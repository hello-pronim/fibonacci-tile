import { gql } from "@apollo/client";

export const CategoriesQuery: any = gql`
  query categories($group: [String]) {
    categories(group: $group) {
      id
      title
      ... on colourSchemes_Category {
        colorHex
        textColor
      }
    }
  }
`;

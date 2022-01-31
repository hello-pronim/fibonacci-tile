import { gql } from "@apollo/client";

export const CategoriesQuery: any = gql`
  query categories($group: [String]) {
    categories(group: $group) {
      id
      title
      slug
      ... on colourSchemes_Category {
        colorHex
        textColor
      }
      ... on productCategories_Category {
        description
      }
    }
  }
`;

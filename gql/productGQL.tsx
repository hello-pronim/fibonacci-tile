import { gql } from "@apollo/client";

export const ProductsQuery = gql`
  query ProductsQuery(
    $search: String = ""
    $productCategories: [QueryArgument] = []
    $colourSchemes: [QueryArgument] = []
    $orderBy: String = "title ASC"
    $collections: [QueryArgument] = []
  ) {
    entries(
      section: "products"
      search: $search
      productCategories: $productCategories
      colourSchemes: $colourSchemes
      orderBy: $orderBy
      collections: $collections
    ) {
      id
      slug
      ... on products_product_Entry {
        title
        subline
        collections {
          title
          slug
        }
        label
        backgroundColor
        productNumber
        designStory
        projectIntroduction
        sampleAvailable
        materialsComposition
        finishAppearance
        applications
        sizes {
          id
          title
          parent {
            id
            title
          }
        }
        productCategories {
          title
        }
        thumbImage {
          id
          url
        }
        largeImage {
          id
          url
        }
      }
    }
  }
`;

export const ProductQuery = gql`
  query ProductQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      slug
      ... on products_product_Entry {
        title
        subline
        collections {
          id
          title
          slug
        }
        label
        backgroundColor
        productNumber
        designStory
        projectIntroduction
        sampleAvailable
        materialsComposition
        finishAppearance
        applications
        sizes {
          id
          title
          parent {
            id
            title
          }
        }
        productCategories {
          title
        }
        thumbImage {
          id
          url
        }
        largeImage {
          id
          url
        }
        gallery {
          id
          title
          url
        }
        project1 {
          id
          slug
          title
          ... on projects_projectDetails_Entry {
            heroImage {
              url
            }
            location
            projectCompleted
          }
        }
        project2 {
          id
          slug
          title
          ... on projects_projectDetails_Entry {
            heroImage {
              url
            }
            location
            projectCompleted
          }
        }
      }
    }
  }
`;

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
      ... on collections_Category {
        introduction
        projectIntroduction
        heroImage {
          id
          url
        }
      }
    }
  }
`;

export const CategoryQuery: any = gql`
  query category($slug: [String] = "") {
    category(slug: $slug) {
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
      ... on collections_Category {
        id
        backgroundColor1
        backgroundColor2
        introduction
        projectIntroduction
        subline
        featuredProjects {
          id
          slug
          title
          ... on projects_projectDetails_Entry {
            heroImage {
              url
            }
            blurThumb: heroImage @transform(width: 50, height: 50) {
              url
            }
            heroImageThumb: heroImage @transform(handle: "projectThumbnail") {
              id
              url
              width
              height
            }
            location
            projectCompleted
          }
        }
        heroImage {
          id
          url
          width
          height
        }
        blurThumb: heroImage @transform(width: 50, height: 50) {
          url
        }
        gallery {
          id
          title
          url
          width
          height
        }
      }
    }
  }
`;

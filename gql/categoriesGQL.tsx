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
        descriptionText
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

const galleryImageThumb = [710 * 2, 900 * 2];
const galleryImageBlurThumb = [
  Math.round(galleryImageThumb[0] / 100),
  Math.round(galleryImageThumb[1] / 100),
];

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
          url
        }
        galleryThumbs: gallery @transform(width: ${galleryImageThumb[0]}, height:  ${galleryImageThumb[1]}) {
          url
          blurThumb: url @transform(width: ${galleryImageBlurThumb[0]}, height: ${galleryImageBlurThumb[1]})
          title
          width
          height
        }
      }
    }
  }
`;

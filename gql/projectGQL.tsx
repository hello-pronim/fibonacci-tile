import { gql } from "@apollo/client";

export const ProjectsQuery: any = gql`
  query ProjectsQuery {
    entries(section: "projects") {
      id
      slug
      title
      ... on projects_projectDetails_Entry {
        id
        location
        sector {
          slug
        }
        heroImage {
          url
          height
          width
        }
        heroImageThumb: heroImage @transform(handle: "projectThumbnail") {
          id
          url
          width
          height
        }
        projectCompleted
      }
    }
  }
`;

export const ProjectQuery: any = gql`
  query ProjectQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      title
      ... on projects_projectDetails_Entry {
        id
        location
        projectCompleted
        architect
        builder
        designer
        photographer
        backgroundColor
        label
        sector {
          slug
          title
        }
        featuredProducts {
          title
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
        heroImage {
          url
          height
          width
        }
        heroImageThumb: heroImage @transform(handle: "projectThumbnail") {
          id
          url
          width
          height
        }
        projectComponents {
          ... on projectComponents_heroBlock_BlockType {
            sideText
            imageCaption
            heading
            image {
              url
              height
              width
            }
          }
          ... on projectComponents_twoColsText_BlockType {
            headline
            text
          }
          ... on projectComponents_twoImages_BlockType {
            image1 {
              url
              width
              height
            }
            image1Caption
            image2 {
              url
              width
              height
            }
            image2Caption
          }
          ... on projectComponents_fullImage_BlockType {
            image {
              url
              width
              height
            }
            imageCaption
          }
          ... on projectComponents_twoColsImage_BlockType {
            image {
              url
              width
              height
            }
            headline
          }
        }
      }
    }
  }
`;

import { gql } from "@apollo/client";

const projectListThumb = [800 * 2, 932 * 2];
const projectListBlurThumb = [
  Math.round(projectListThumb[0] / 100),
  Math.round(projectListThumb[1] / 100),
];

export const ProjectsQuery: any = gql`
  query ProjectsQuery( $limit: Int = 4,  $offset: Int = 0 ) {
    entries(limit: $limit, offset: $offset, section: "projects", orderBy: "postDate DESC") {
      id
      slug
      title
      postDate
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
        blurThumb: heroImage @transform(width: ${projectListBlurThumb[0]}, height: ${projectListBlurThumb[1]}) {
          url
        }
        heroImageThumb: heroImage @transform(width: ${projectListThumb[0]}, height: ${projectListThumb[1]}) {
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

const projectHeroThumb = [961 * 2, 1097 * 2];
const projectHeroBlurThumb = [
  Math.round(projectHeroThumb[0] / 100),
  Math.round(projectHeroThumb[1] / 100),
];

const projectHeroBlockThumb = [1460 * 2, 820 * 2];
const projectHeroBlockBlurThumb = [
  Math.round(projectHeroBlockThumb[0] / 100),
  Math.round(projectHeroBlockThumb[1] / 100),
];

const projectTwoImageBlockThumb = [710 * 2, 820 * 2];
const projectTwoImageBlockBlurThumb = [
  Math.round(projectTwoImageBlockThumb[0] / 100),
  Math.round(projectTwoImageBlockThumb[1] / 100),
];

export const ProjectQuery: any = gql`
  query ProjectQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      title
      postDate
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
        heroImage {
          url
          height
          width
        }
        blurThumb: heroImage @transform(width: ${projectHeroBlurThumb[0]}, height: ${projectHeroBlurThumb[1]}) {
          url
        }
        heroImageThumb: heroImage @transform(width: ${projectHeroThumb[0]}, height: ${projectHeroThumb[1]}) {
          id
          url
          title
          width
          height
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
            thumbImage {
              id
              url
            }
            blurThumb: thumbImage @transform(width: 50, height: 50) {
              url
            }
            thumbImageList: thumbImage @transform(handle: "productThumbnail") {
              id
              url
              title
              width
              height
            }
          }
        }
        projectComponents {
          ... on projectComponents_heroBlock_BlockType {
            typeHandle
            sideText
            imageCaption
            heading
            image {
              url
            }
            blurThumb: image @transform(width: ${projectHeroBlockBlurThumb[0]}, height: ${projectHeroBlockBlurThumb[1]}) {
              url
            }
            imageThumb: image @transform(width: ${projectHeroBlockThumb[0]}, height: ${projectHeroBlockThumb[1]}) {
              url
              title
              width
              height
            }
          }
          ... on projectComponents_fullImage_BlockType {
            typeHandle
            image {
              url
            }
            blurThumb: image @transform(width: ${projectHeroBlockBlurThumb[0]}, height: ${projectHeroBlockBlurThumb[1]}) {
              url
            }
            imageThumb: image @transform(width: ${projectHeroBlockThumb[0]}, height: ${projectHeroBlockThumb[1]}) {
              url
              title
              width
              height
            }
            imageCaption
          }
          ... on projectComponents_twoColsText_BlockType {
            typeHandle
            headline
            text
          }
          ... on projectComponents_twoImages_BlockType {
            typeHandle
            image1 {
              url
              width
              height
            }
            blurThumb1: image1 @transform(width: ${projectTwoImageBlockBlurThumb[0]}, height: ${projectTwoImageBlockBlurThumb[1]}) {
              url
            }
            image1Thumb: image1 @transform(width: ${projectTwoImageBlockThumb[0]}, height: ${projectTwoImageBlockThumb[1]}) {
              url
              title
              width
              height
            }
            image1Caption
            image2 {
              url
            }
            blurThumb2: image2 @transform(width: ${projectTwoImageBlockBlurThumb[0]}, height: ${projectTwoImageBlockBlurThumb[1]}) {
              url
            }
            image2Thumb: image2 @transform(width: ${projectTwoImageBlockThumb[0]}, height: ${projectTwoImageBlockThumb[1]}) {
              url
              title
              width
              height
            }
            image2Caption
          }
          ... on projectComponents_twoColsImage_BlockType {
            typeHandle
            image {
              url
            }
            blurThumb: image @transform(width: ${projectTwoImageBlockBlurThumb[0]}, height: ${projectTwoImageBlockBlurThumb[1]}) {
              url
            }
            imageThumb: image @transform(width: ${projectTwoImageBlockThumb[0]}, height: ${projectTwoImageBlockThumb[1]}) {
              url
              title
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

import { gql } from "@apollo/client";

export const GlobalSpecificationQuery = gql`
  query GlobalSpecificationQuery {
    globalSet(handle: "specifications") {
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

export const GlobalNotificationQuery = gql`
  query GlobalNotificationQuery {
    globalSet(handle: "notificationsBar") {
      ... on notificationsBar_GlobalSet {
        notifications {
          ... on notifications_notifications_BlockType {
            id
            notificationsText
            notificationsTitle
            slug
            expiryDate
            active
            notificationsLink {
              id
              slug
              sectionHandle
            }
          }
        }
      }
    }
  }
`;

const samplesThumb = [792 * 2, 465 * 2];
const samplesBlurThumb = [
  Math.round(samplesThumb[0] / 100),
  Math.round(samplesThumb[1] / 100),
];

export const sampleCta1Query = gql`
  query sampleCta1Query {
    globalSet(handle: "sampleCta1") {
      id
      ... on sampleCta1_GlobalSet {
        id
        CTAFields {
          ... on CTAFields_CTAFields_BlockType {
            id
            samplesHeading
            samplesSubLine
            samplesIntro
            samplesButton
            samplesImage {
              url
            }
            blurThumb: samplesImage @transform(width: ${samplesBlurThumb[0]}, height: ${samplesBlurThumb[1]}) {
              url
            }
            samplesImageThumb: samplesImage @transform(width: ${samplesThumb[0]}, height: ${samplesThumb[1]}) {
              url 
              title
              width
              height
            }
            samplesButtonLink {
              slug
            }
          }
        }
      }
    }
  }
`;

export const sampleCta2Query = gql`
  query sampleCta1Query {
    globalSet(handle: "sampleCta2") {
      id
      ... on sampleCta2_GlobalSet {
        id
        CTAFields {
          ... on CTAFields_CTAFields_BlockType {
            id
            samplesHeading
            samplesSubLine
            samplesIntro
            samplesButton
            samplesImage {
              url
            }
            blurThumb: samplesImage @transform(width: ${samplesBlurThumb[0]}, height: ${samplesBlurThumb[1]}) {
              url
            }
            samplesImageThumb: samplesImage @transform(width: ${samplesThumb[0]}, height: ${samplesThumb[1]}) {
              url 
              title
              width
              height
            }
          }
        }
      }
    }
  }
`;

export const customSolutionsCtaQuery = gql`
  query customSolutionsCtaQuery {
    globalSet(handle: "customSolutionsCta") {
      id
      ... on customSolutionsCta_GlobalSet {
        id
        name
        customSolutionsCTA {
          ... on customSolutionsCTA_customDesignSolutions_BlockType {
            id
            backgroundColour
            textColour
            customCtaButton
            customCtaLink {
              slug
            }
            customHeader
            customIntro
            customSolutionsText
            customImage {
              url
            }
            blurThumb: customImage @transform(width: 50, height: 50) {
              url
              title
              width
              height
            }
            customImageThumb: customImage @transform(width: 960, height: 680) {
              url
              title
              width
              height
            }
          }
        }
      }
    }
  }
`;

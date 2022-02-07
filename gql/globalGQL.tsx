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
              ... on products_product_Entry {
                id
              }
            }
          }
        }
      }
    }
  }
`;

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
              width(width: 792)
              height(height: 465)
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
              width(width: 792)
              height(height: 465)
            }
          }
        }
      }
    }
  }
`;

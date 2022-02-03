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





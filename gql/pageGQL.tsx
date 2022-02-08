import { gql } from "@apollo/client";
import { LIST_PRODUCT_FIELDS } from "./fragments";

export const PageQuery = gql`
  query PageQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      ... on inUse_inUse_Entry {
        pageIntro
        pageHeading
      }
      ... on latestNews_latestNews_Entry {
        pageHeading
        pageIntro
      }
    }
  }
`;
export const TerrazzoPageQuery = gql`
  query TerrazzoPageQuerys($slug: [String]) {
    entry(slug: $slug) {
      id
      ... on terrazzo_terrazzo_Entry {
        id
        bannerSubline
        productsSideText
        singleTerrazzo {
          ... on singleTerrazzo_terrazzoBanner_BlockType {
            id
            typeHandle
            terrazoBannerImage {
              url
            }
            terrazzoHeading
            terrazzoCta
            terrazzoBannerIntro
            terrazoSubline
          }
          ... on singleTerrazzo_collectionsBanner_BlockType {
            id
            typeHandle
            collectionsCta
            collectionsBannerIntro
            collectionsBannerImage {
              url
            }
          }
          ... on singleTerrazzo_customDesignSolutions_BlockType {
            id
            typeHandle
            backgroundColour
            customCtaButton
            customCtaLink {
              id
            }
          }
        }
      }
    }
  }
`;

export const HomePageQuery = gql`
  ${LIST_PRODUCT_FIELDS}
  query HomePageQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      ... on homePage_homePage_Entry {
        homePageComponents {
          ... on homePageComponents_bannerType1_BlockType {
            id
            typeHandle
            backgroundImage {
              url
            }
            sliderImage: backgroundImage
              @transform(width: 1920, height: 880, mode: "crop") {
              url
              title
              width
              height
            }
            sliderMobImage: backgroundImage
              @transform(width: 750, height: 1240, mode: "crop") {
              url
              title
              width
              height
            }
            likeNoOtherText
          }
          ... on homePageComponents_bannerType2_BlockType {
            id
            typeHandle
            backgroundColour
            backgroundImage {
              url
            }
            text
          }
          ... on homePageComponents_bannerType3_BlockType {
            id
            typeHandle
            imageRight {
              url
              title
              width
              height
            }
            subline
            button
            heading
          }
          ... on homePageComponents_featuredProducts_BlockType {
            id
            typeHandle
            products {
              ...ListProductFields
            }
          }
          ... on homePageComponents_samples_BlockType {
            id
            typeHandle
            intro
            subLine
            heading
            image {
              url
              title
              width
              height
            }
            button
          }
          ... on homePageComponents_beInspired_BlockType {
            id
            typeHandle
            left1Image {
              url
            }
            left1ImageThumb: left1Image
              @transform(width: 560, height: 560, mode: "crop") {
              url
              title
              width
              height
            }
            left1Caption
            left1Text
            left2Image {
              url
            }
            left2ImageThumb: left2Image
              @transform(width: 560, height: 560, mode: "crop") {
              url
              title
              width
              height
            }
            left2Caption
            left2Text
            right1Image {
              url
            }
            right1ImageThumb: right1Image
              @transform(width: 1715, height: 1221, mode: "crop") {
              url
              title
              width
              height
            }
            right1Caption
            right1Text
            right2Image {
              url
            }
            right2ImageThumb: right2Image
              @transform(width: 1715, height: 1221, mode: "crop") {
              url
              title
              width
              height
            }
            right2SubLine
            right2Text
            rightText
            sideText
          }
          ... on homePageComponents_featuredProjects_BlockType {
            id
            typeHandle
            projects {
              ... on projects_projectDetails_Entry {
                id
                slug
                title
                location
                label
                heroImage {
                  url
                  width
                  height
                }
                heroImageThumb: heroImage
                  @transform(width: 1460, height: 900, mode: "crop") {
                  url
                  width
                  height
                }
                heroMobImageThumb: heroImage
                  @transform(width: 343, height: 476, mode: "crop") {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const OurStoryPageQuery = gql`
  query OurStoryPageQuery($slug: [String]) {
    entry(slug: $slug) {
      ... on ourStoryPage_ourStoryPage_Entry {
        id
        slug
        ourStoryComponents {
          ... on ourStoryComponents_headingLeftTextRight_BlockType {
            id
            headingLeft
            textRight
          }
          ... on ourStoryComponents_heroImage_BlockType {
            id
            image(withTransforms: "ourStoryPageHero") {
              id
              url
            }
          }
          ... on ourStoryComponents_quote_BlockType {
            id
            heading
            subLine
          }
        }
      }
    }
  }
`;

export const NewsletterQuery = gql`
  query NewsletterQuery($slug: [String]) {
    entry(slug: $slug) {
      ... on latestNews_latestNews_Entry {
        newsletter {
          ... on newsletter_newsletter_BlockType {
            id
            heading
            subheading
          }
        }
      }
    }
  }
`;

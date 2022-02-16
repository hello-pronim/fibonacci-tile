import { gql } from "@apollo/client";
import { LIST_PRODUCT_FIELDS } from "./fragments";

export const PageQuery = gql`
  query PageQuery($slug: [String]) {
    entry(slug: $slug) {
      id
      ... on privacyPolicy_privacyPolicy_Entry {
        title
        pageContent
      }
      ... on inUse_inUse_Entry {
        title
        pageHeading
        pageIntro
      }
      ... on latestNews_latestNews_Entry {
        title
        pageHeading
        pageIntro
        newsletter {
          ... on newsletter_newsletter_BlockType {
            id
            heading
            subheading
          }
        }
      }
      ... on howToOrderSamples_howToOrderSamples_Entry {
        id
        pageHeading
        orderSamplesComponents {
          ... on orderSamplesComponents_headingLeftTextRight_BlockType {
            id
            typeHandle
            headingText
            textRight
            sideText
          }
          ... on orderSamplesComponents_leftImageRightText_BlockType {
            id
            typeHandle
            textHeading
            text
            image {
              url
            }
            imageThumb: image
              @transform(width: 710, height: 710, mode: "crop") {
              url
              title
              width
              height
            }
          }
        }
      }
      ... on requestAQuote_requestAQuote_Entry {
        id
        pageHeading
        pageIntro
      }
      ... on productSupport_productSupport_Entry {
        id
        pageHeading
        productSupportComponents {
          ... on productSupportComponents_productGuide_BlockType {
            id
            typeHandle
            imageLeft {
              url
            }
            imageLeftThumb: imageLeft
              @transform(width: 710, height: 710, mode: "crop") {
              url
              title
              width
              height
            }
            rightHeading
            rightText
            rightEmphasisText
            rightEmphasisButton
            rightEmphasisPdf {
              url
            }
          }
          ... on productSupportComponents_installation_BlockType {
            id
            typeHandle
            howToTilesHeading
            howToTilesText
            howToTilesButton
            howToTilesGuide {
              url
            }
            howToSlabHeading
            howToSlabText
            howToSlabButton
            howToSlabGuide {
              url
            }
            imageRight {
              url
            }
            imageRightThumb: imageRight
              @transform(width: 1065, height: 1216, mode: "crop") {
              url
              title
              width
              height
            }
          }
          ... on productSupportComponents_imageLeftTextRight_BlockType {
            id
            typeHandle
            rightHeading
            rightText
            rightButton
            rightButtonLink {
              id
              url
            }
            imageLeft {
              url
            }
            imageLeftThumb: imageLeft
              @transform(width: 710, height: 710, mode: "crop") {
              url
              title
              width
              height
            }
          }
          ... on productSupportComponents_faqs_BlockType {
            id
            typeHandle
            faqList {
              ... on faqList_BlockType {
                id
                question
                text
              }
            }
          }
        }
      }
      ... on collections_collections_Entry {
        id
        bannerSubline
        productsSideText
        bannerImage {
          url
          width
          height
          title
        }
        bannerIntro
        bannerHeading
        bannerInnerSubline
        bannerCTA
      }
      ... on terrazzo_terrazzo_Entry {
        id
        bannerSubline
        productsSideText
        bannerImage {
          url
          width
          height
          title
        }
        bannerIntro
        bannerHeading
        bannerInnerSubline
        bannerCTA
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
            image1 {
              url
            }
            image2 {
              url
            }
            likeNoOtherText
          }
          ... on homePageComponents_bannerType3_BlockType {
            id
            typeHandle
            backgroundColour
            text
          }
          ... on homePageComponents_bannerType4_BlockType {
            id
            typeHandle
            imageRight {
              url
              title
              width
              height
            }
            heading
            subline
            button
            buttonUrl {
              slug
            }
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
        pageHeading
        rightHeader
        ourStoryComponents {
          ... on ourStoryComponents_heroImage_BlockType {
            id
            typeHandle
            image {
              url
              title
              width
              height
            }
          }
          ... on ourStoryComponents_sideBySideImage_BlockType {
            id
            image1 {
              url
              width
              title
              height
            }
            image2 {
              url
              width
              title
              height
            }
          }
          ... on ourStoryComponents_headingLeftTextRight_BlockType {
            id
            typeHandle
            headingLeft
            textRight
            sideText
          }
          ... on ourStoryComponents_headingLeftImageRight_BlockType {
            id
            typeHandle
            headingLeft
            imageRight {
              url
              title
              width
              height
            }
            sideText
          }
          ... on ourStoryComponents_featurePanel_BlockType {
            id
            typeHandle
            panelBackgroundColor
            heading1
            heading2
            heroImage {
              url
              width
              height
            }
            heroImageDescription
            sideText
            textLeft
            textRight
          }
          ... on ourStoryComponents_quote_BlockType {
            id
            typeHandle
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

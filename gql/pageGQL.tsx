import { gql } from "@apollo/client";
import { LIST_PRODUCT_FIELDS } from "./fragments";

const orderSamplesThumb = [710 * 2, 710 * 2];
const orderSamplesBlurThumb = [
  Math.round(orderSamplesThumb[0] / 100),
  Math.round(orderSamplesThumb[1] / 100),
];

const installationBlockThumb = [1065 * 2, 1216 * 2];
const installationBlockBlurThumb = [
  Math.round(installationBlockThumb[0] / 100),
  Math.round(installationBlockThumb[1] / 100),
];

const sliderImageThumb = [1540 * 2, 705 * 2];
const sliderImageBlurThumb = [
  Math.round(sliderImageThumb[0] / 100),
  Math.round(sliderImageThumb[1] / 100),
];

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
            blurThumb: image @transform(width: ${orderSamplesBlurThumb[0]}, height:${orderSamplesBlurThumb[1]}) {
              url
            }
            imageThumb: image @transform(width: ${orderSamplesThumb[0]}, height: ${orderSamplesThumb[1]}) {
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
            blurThumb: imageLeft @transform(width: ${orderSamplesBlurThumb[0]}, height:${orderSamplesBlurThumb[1]}) {
              url
            }
            imageLeftThumb: imageLeft @transform(width: ${orderSamplesThumb[0]}, height: ${orderSamplesThumb[1]}) {
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
            blurThumb: imageRight @transform(width: ${installationBlockBlurThumb[0]}, height: ${installationBlockBlurThumb[1]}) {
              url
            }
            imageRightThumb: imageRight @transform(width: ${installationBlockThumb[0]}, height: ${installationBlockThumb[1]}) {
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
            blurThumb: imageLeft @transform(width: ${orderSamplesBlurThumb[0]}, height: ${orderSamplesBlurThumb[1]}) {
              url
            }
            imageLeftThumb: imageLeft @transform(width: ${orderSamplesThumb[0]}, height: ${orderSamplesThumb[1]}) {
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
        }
        blurThumb: bannerImage @transform(width: ${sliderImageBlurThumb[0]}, height: ${sliderImageBlurThumb[1]}) {
          url
        }
        bannerImageThumb: bannerImage @transform(width: ${sliderImageThumb[0]}, height: ${sliderImageThumb[1]}) {
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
        }
        blurThumb: bannerImage @transform(width: ${sliderImageBlurThumb[0]}, height: ${sliderImageBlurThumb[1]}) {
          url
        }
        bannerImageThumb: bannerImage @transform(width: ${sliderImageThumb[0]}, height: ${sliderImageThumb[1]}) {
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

const homeSliderImageThumb = [2400, 1100];
const homeSliderImageBlurThumb = [
  Math.round(homeSliderImageThumb[0] / 100),
  Math.round(homeSliderImageThumb[1] / 100),
];
const homeSamplesThumb = [1074 * 2, 630 * 2];
const homeSamplesBlurThumb = [
  Math.round(homeSamplesThumb[0] / 2),
  Math.round(homeSamplesThumb[1] / 2),
];
const homeSamplesThumb1 = [960 * 2, 880 * 2];
const homeSamplesBlurThumb1 = [
  Math.round(homeSamplesThumb1[0] / 2),
  Math.round(homeSamplesThumb1[1] / 2),
];

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
            sliderImage: backgroundImage @transform(width: ${homeSliderImageThumb[0]}, height: ${homeSliderImageThumb[1]}) {
              url
              title
              width
              height
            }
            blurThumb: backgroundImage @transform(width: ${homeSliderImageBlurThumb[0]}, height:${homeSliderImageBlurThumb[1]}) {
              url
            }
            sliderMobImage: backgroundImage
              @transform(width: 750, height: 1240) {
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
            blurThumb1: image1 @transform(width: ${homeSamplesBlurThumb1[0]}, height: ${homeSamplesBlurThumb1[1]}) {
              url
            }
            sliderImage1: image1
              @transform(width: ${homeSamplesThumb1[0]}, height: ${homeSamplesThumb1[1]}) {
              url
              title
              width
              height
            }
            image2 {
              url
            }
            blurThumb2: image2 @transform(width: ${homeSamplesBlurThumb1[0]}, height: ${homeSamplesBlurThumb1[1]}) {
              url
            }
            sliderImage2: image2
              @transform(width: ${homeSamplesThumb1[0]}, height: ${homeSamplesThumb1[1]}) {
              url
              title
              width
              height
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
            }
            blurThumb: image @transform(width: ${homeSamplesBlurThumb[0]}, height: ${homeSamplesBlurThumb[1]}) {
              url
            }
            imageThumb: image @transform(width: ${homeSamplesThumb[0]}, height: ${homeSamplesThumb[1]}) {
              url
              title
              width
              height
            }
            button
            buttonLink {
              slug
            }
          }
          ... on homePageComponents_beInspired_BlockType {
            id
            typeHandle
            left1Image {
              url
            }
            blurThumbLeft1: left1Image @transform(width: 50, height: 50) {
              url
            }
            left1ImageThumb: left1Image @transform(width: 1120, height: 1120) {
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
            blurThumbLeft2: left2Image @transform(width: 50, height: 50) {
              url
            }
            left2ImageThumb: left2Image @transform(width: 1120, height: 1120) {
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
            blurThumbRight1: right1Image @transform(width: 50, height: 50) {
              url
            }
            right1ImageThumb: right1Image
              @transform(width: 1715, height: 1221) {
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
            blurThumbRight2: right1Image @transform(width: 50, height: 50) {
              url
            }
            right2ImageThumb: right2Image
              @transform(width: 1715, height: 1221) {
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
                blurThumb: heroImage @transform(width: 50, height: 50) {
                  url
                }
                heroImageThumb: heroImage @transform(width: 1460, height: 900) {
                  url
                  width
                  height
                }
                heroMobImageThumb: heroImage
                  @transform(width: 686, height: 952) {
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
            blurThumb: image @transform(width: 50, height: 50) {
              url
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
            blurThumb1: image1 @transform(width: 50, height: 50) {
              url
            }
            image2 {
              url
              width
              title
              height
            }
            blurThumb2: image2 @transform(width: 50, height: 50) {
              url
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
            blurThumb: imageRight @transform(width: 50, height: 50) {
              url
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
            blurThumb: heroImage @transform(width: 50, height: 50) {
              url
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

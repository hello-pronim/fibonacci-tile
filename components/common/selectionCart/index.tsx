import React from "react";
import Image from "next/image";
import { useAppContext } from "@contexts/AppContext";
import ProductCard from "@components/common/product/card";
import ArrowButton from "@components/common/button/arrowButton";
import CheckMarkIcon from "@components/icons/checkmark";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import theme from "@styles/theme";
import Chevron from "public/assets/icons/chevron.svg";
import SupportIcon from "public/assets/icons/support-icon.svg";
import SamplesIcon from "public/assets/icons/sample-icon.svg";
import QuoteIcon from "public/assets/icons/quote-icon.svg";
import EnquiryIcon from "public/assets/icons/enquiry-icon.svg";

const fieldStyles = {
  fontFamily: 1,
  fontSize: 2,
  lineHeight: 4,
  fontWeight: 0,
  padding: 16,
  border: "1px solid #b1aba6",
  color: theme.colors.charcoal,
};

const textareaStyles = {
  width: "100%",
  minWidth: "100%",
  height: 127,
  maxHeight: 127,
  fontFamily: 1,
  fontSize: 2,
  lineHeight: 4,
  fontWeight: 0,
  padding: 16,
  border: "1px solid #b1aba6",
  color: theme.colors.charcoal,
  overflow: "scroll",
};

const SelectionCart = ({ active, newSelection, tab }) => {
  const { state, dispatch } = useAppContext();
  return (
    <div
      css={css({
        boxSizing: "border-box",
        position: "absolute",
        top: 80,
        right: active ? 0 : "-550px",
        width: ['100%','100%', 480],
        height: "calc(100vh - 114px)",
        background: tab === "support" ? "#141414" : "#fff",
        zIndex: 999,
        pb: tab === "cart" ? 142 : 0,
        transition: "ease all 0.4s",
        boxShadow:
          "0px 24px 38px rgba(20, 20, 20, 0.08), 0px 9px 46px rgba(20, 20, 20, 0.08), 0px 11px 15px rgba(20, 20, 20, 0.16)",
      })}
    >
      {tab === "contact" && (
        <div css={css({ height: "100%", overflow: "scroll", py: 36, px: 24 })}>
          <div css={css({ display: "flex", alignItems: "center" })}>
            <Text variant="Display-Small" altFont>
              Need further assistance? <br />
              <br />
              Call us on 1300 342 662 <br />
              or fill in the form below.
            </Text>
          </div>
          <div
            css={css({
              display: "flex",
              flexDirection: "column",
              pt: 60,
              rowGap: "8px",
            })}
          >
            <form
              css={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
              })}
            >
              <input css={css(fieldStyles)} placeholder="First Name"></input>
              <input css={css(fieldStyles)} placeholder="Last Name"></input>
              <input
                css={css(fieldStyles)}
                placeholder="Contact Number"
              ></input>
              <input css={css(fieldStyles)} placeholder="Email Address"></input>
              <textarea
                css={css(textareaStyles)}
                placeholder="Message"
              ></textarea>
              <label css={css({ mb: 39 })}>
                <input type="checkbox"></input>
                <span
                  css={css({
                    fontFamily: 1,
                    fontSize: 1,
                    lineHeight: 4,
                    fontWeight: 0,
                  })}
                >
                  {" "}
                  I agree to the terms and conditions{" "}
                </span>
              </label>
              <ArrowButton
                mode="dark"
                title="Order Samples"
                link="#"
                fullWidth
                size=""
              />
            </form>
          </div>
        </div>
      )}
      {tab === "support" && (
        <div css={css({ height: "100%", overflow: "scroll", py: 36, px: 24 })}>
          <div
            css={css({
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fff",
            })}
          >
            <Text variant="Display-XSmall" altFont>
              How can we help you
            </Text>
            <Text variant="Body-Regular" altFont>
              We can help answer questions and solve problems. If you can’t find
              what you are looking for give us a call on 1300 345 567.
            </Text>
          </div>
          <div
            css={css({
              display: "flex",
              flexDirection: "column",
              pt: 60,
            })}
          >
            <div
              css={css({
                bg: "#fffff7",
                px: 24,
                py: 40,
                display: "flex",
                alignItems: "center",
                columnGap: 38,
                position: "relative",
                cursor: 'pointer',
                '.chevronWrapper': {
                  opacity: 0,
                  transition: 'ease all 0.3s',
                },
                '&:hover': {
                  '.chevronWrapper': {
                    opacity: 1,
                  },
                },
              })}
            >
              <Image alt="" src={SupportIcon} width={48} height={48} />
              <Text variant="Display-XXSmall" altFont>
                Product Support
              </Text>
              <div
                css={css({
                  width: 28,
                  height: 28,
                  position: "absolute",
                  right: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                <Image alt="" src={Chevron} width={10} height={16} />
              </div>
            </div>
            <div
              css={css({
                bg: "#ede6de",
                px: 24,
                py: 40,
                display: "flex",
                alignItems: "center",
                columnGap: 38,
                position: "relative",
                cursor: 'pointer',
                '.chevronWrapper': {
                  opacity: 0,
                  transition: 'ease all 0.3s',
                },
                '&:hover': {
                  '.chevronWrapper': {
                    opacity: 1,
                  },
                },
              })}
            >
              <Image alt="" src={SamplesIcon} width={48} height={48} />
              <Text variant="Display-XXSmall" altFont>
                How to order samples
              </Text>
              <div
                css={css({
                  width: 28,
                  height: 28,
                  position: "absolute",
                  right: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                <Image alt="" src={Chevron} width={10} height={16} />
              </div>
            </div>
            <div
              css={css({
                bg: "#ebe9e7",
                px: 24,
                py: 40,
                display: "flex",
                alignItems: "center",
                columnGap: 38,
                position: "relative",
                cursor: 'pointer',
                '.chevronWrapper': {
                  opacity: 0,
                  transition: 'ease all 0.3s',
                },
                '&:hover': {
                  '.chevronWrapper': {
                    opacity: 1,
                  },
                },
              })}
            >
              <Image alt="" src={QuoteIcon} width={48} height={48} />
              <Text variant="Display-XXSmall" altFont>
                Request a quote
              </Text>
              <div
                css={css({
                  width: 28,
                  height: 28,
                  position: "absolute",
                  right: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                <Image alt="" src={Chevron} width={10} height={16} />
              </div>
            </div>
            <div
              css={css({
                bg: "#fdfdfd",
                px: 24,
                py: 40,
                display: "flex",
                alignItems: "center",
                columnGap: 38,
                position: "relative",
                cursor: 'pointer',
                '.chevronWrapper': {
                  opacity: 0,
                  transition: 'ease all 0.3s',
                },
                '&:hover': {
                  '.chevronWrapper': {
                    opacity: 1,
                  },
                },
              })}
            >
              <Image alt="" src={EnquiryIcon} width={48} height={48} />
              <Text variant="Display-XXSmall" altFont>
                General Enquiry
              </Text>
              <div
                className="chevronWrapper"
                css={css({
                  width: 28,
                  height: 28,
                  position: "absolute",
                  right: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                <Image alt="" src={Chevron} width={10} height={16} />
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "cart" && (
        <>
          <div
            css={css({ height: "100%", overflow: "scroll", py: 36, px: 24 })}
          >
            <div css={css({ display: "flex", alignItems: "center" })}>
              {newSelection ? (
                <>
                  <Text variant="Body-Large">Selection Added</Text>
                  <div
                    css={css({
                      display: "flex",
                      border: "1px solid black",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: "8px",
                    })}
                  >
                    <CheckMarkIcon />
                  </div>
                </>
              ) : (
                <Text variant="Body-Large">
                  Selections{" "}
                  {state && "(" + state?.selectedProducts.length + ")"}
                </Text>
              )}
            </div>
            <div
              css={css({
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                pt: 28,
                columnGap: 24,
                rowGap: 16,
              })}
            >
              {state &&
                state?.selectedProducts.map((product) => {
                  return (
                    <ProductCard
                      isSelected={
                        state?.selectedProducts.findIndex(
                          (sp) => sp.id === product.id
                        ) !== -1
                      }
                      toggleProductSelect={() => {
                        dispatch({
                          type: "TOGGLE_PRODUCT_SELECTION",
                          product,
                        });
                      }}
                      key={product.id}
                      product={product}
                      compact
                    />
                  );
                })}
            </div>
          </div>
          <div
            css={css({
              display: "flex",
              flexDirection: "column",
              padding: 24,
              bg: "#888888",
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              alignItems: "center",
              div: {
                width: "100%",
                a: {
                  width: "100%",
                },
              },
            })}
          >
            <ArrowButton mode="light" title="Order Samples" link="/checkout" />
            <a href="#" css={css({ color: "#fff", mt: 24 })}>
              <Text variant="Body-Small">Continue Selections</Text>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectionCart;

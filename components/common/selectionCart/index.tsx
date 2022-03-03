import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/common/button";
import { css } from "@styled-system/css";
import { useForm } from 'react-hook-form';
// import useOnClickOutside from "use-onclickoutside";
import { useAppContext } from "@contexts/AppContext";
import ProductCard from "@components/common/product/card";
import ArrowButton from "@components/common/button/arrowButton";
import CheckMarkIcon from "@components/icons/checkmark";
import CloseIcon from "@components/icons/close";
import Text from "@components/common/typography";
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
  const [contactSubmit, setContactSubmit] = useState(false);
  const { state, dispatch } = useAppContext();
  const { selectedProducts } = state;
  const ref = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();
  // useOnClickOutside(ref, () => {
  //   dispatch({
  //     type: "OPEN_DRAWER",
  //     value: false,
  //   });
  // });
  const onSubmit = (data: any) => {
    console.log("formdata", data)
    setContactSubmit(true)
  }
  return (
    <div
      ref={ref}
      css={css({
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        right: active ? 0 : "-550px",
        width: ["100%", "100%", 480],
        height: "100vh",
        background: tab === "support" ? "#141414" : "#fff",
        zIndex: 9999,
        pt: 80,
        pb: tab === "cart" ? 142 : 0,
        transition: "ease all 0.4s",
        boxShadow:
          "0px 24px 38px rgba(20, 20, 20, 0.08), 0px 9px 46px rgba(20, 20, 20, 0.08), 0px 11px 15px rgba(20, 20, 20, 0.16)",
      })}
    >
      {tab === "contact" && (
        <div
          css={css({
            height: "100%",
            overflow: "scroll",
            pt: 0,
            pb: 108,
            px: 24,
          })}
        >
          <div
            onClick={() =>
              dispatch({
                type: "OPEN_DRAWER",
                value: false,
              })
            }
            css={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 12,
              py: 16,
              cursor: "pointer",
              color: theme.colors.stoneTints[8],
            })}
          >
            <Text
              variant="Body-XSmall"
              altFont
              css={css({ textTransform: "uppercase", color: "#000" })}
            >
              Close
            </Text>
            <CloseIcon
              css={css({
                width: 12,
                height: 12,
                color: theme.colors.stoneTints[8],
              })}
            />
          </div>
          <div css={css({ display: "flex", alignItems: "center" })}>
            {!contactSubmit && 
            <Text variant="Display-Small" altFont>
              Need further assistance? <br />
              <br />
              Call us on 1300 342 662 <br />
              or fill in the form below.
            </Text>
            }
            {contactSubmit && 
              <Text variant="Display-Small" altFont>
                Thank you for getting in contact. One of our friendly team will be in contact shortly. <br />
              </Text>
            }
          </div>
        
          <div
            css={css({
              display: "flex",
              flexDirection: "column",
              pt: 60,
              rowGap: "8px",
            })}
          >
            {contactSubmit && 
            <Button color="dark" css={css({ cursor:"pointer", maxWidth: "210px", textAlign: "center", })} href="/terrazzo">
              Continue browsing
            </Button>
            }
            {!contactSubmit && 
            <form
              css={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
              })}
              // action="/thank-you"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input css={css(fieldStyles)} placeholder="First Name" {...register("firstName", {required: true, maxLength: 100})} />
              <input css={css(fieldStyles)} placeholder="Last Name" {...register("lastName", {required: true, maxLength: 100})} />
              <input css={css(fieldStyles)} placeholder="Contact Number" {...register("contactNumber", {required: true, minLength: 6, maxLength: 12})} />
              <input css={css(fieldStyles)} placeholder="Email Address"  {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
              <textarea
                css={css(textareaStyles)}
                placeholder="Message"
                {...register("message", { required: true })}
              ></textarea>
              <label>
                <input type="checkbox" {...register("acceptTerms", { required: true })}/>
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
              {errors?.acceptTerms && 
                <span
                css={css({
                 color: "red",
                 fontSize: 12,
                 display: "block"
                })}>
                  Accept terms and conditions is required.
                </span>
              }
              <div
                css={css({
                  mt: 30
                })}
              ></div>
              <ArrowButton
                mode="dark"
                title="Submit enquiry"
                // onClick={() => {
                //   // setContactSubmit(!contactSubmit)
                // }}
                fullWidth
                size=""
              />
            </form>
             }
          </div>
        </div>
      )}
      {tab === "support" && (
        <div
          css={css({
            height: "100%",
            overflow: "scroll",
            pt: 0,
            pb: 128,
            px: 24,
          })}
        >
          <div
            onClick={() =>
              dispatch({
                type: "OPEN_DRAWER",
                value: false,
              })
            }
            css={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 12,
              py: 16,
              cursor: "pointer",
              color: theme.colors.stoneTints[8],
            })}
          >
            <Text
              variant="Body-XSmall"
              altFont
              css={css({ textTransform: "uppercase", color: "white" })}
            >
              Close
            </Text>
            <CloseIcon
              css={css({
                width: 12,
                height: 12,
                stroke: theme.colors.stoneTints[8],
              })}
            />
          </div>
          <div
            css={css({
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fff",
            })}
          >
            <Text
              variant="Display-XSmall"
              altFont
              css={css({ color: "white" })}
            >
              How can we help you
            </Text>
            <Text variant="Body-Regular" altFont css={css({ color: "white" })}>
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
            <Link href="/support" passHref>
              <div
                css={css({
                  bg: "#fffff7",
                  px: 24,
                  py: 40,
                  display: "flex",
                  alignItems: "center",
                  columnGap: 38,
                  position: "relative",
                  cursor: "pointer",
                  ".chevronWrapper": {
                    opacity: 0,
                    transition: "ease all 0.3s",
                  },
                  "&:hover": {
                    ".chevronWrapper": {
                      opacity: 1,
                    },
                  },
                })}
                onClick={() =>
                  dispatch({
                    type: "OPEN_DRAWER",
                    value: false,
                  })
                }
              >
                <Image alt="support" src={SupportIcon} width={48} height={48} />
                <Text variant="Display-XXSmall" altFont>
                  Product support
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
                  <Image alt="more" src={Chevron} width={10} height={16} />
                </div>
              </div>
            </Link>
            <Link href="/ordering-samples" passHref>
              <div
                css={css({
                  bg: "#ede6de",
                  px: 24,
                  py: 40,
                  display: "flex",
                  alignItems: "center",
                  columnGap: 38,
                  position: "relative",
                  cursor: "pointer",
                  ".chevronWrapper": {
                    opacity: 0,
                    transition: "ease all 0.3s",
                  },
                  "&:hover": {
                    ".chevronWrapper": {
                      opacity: 1,
                    },
                  },
                })}
                onClick={() =>
                  dispatch({
                    type: "OPEN_DRAWER",
                    value: false,
                  })
                }
              >
                <Image alt="samples" src={SamplesIcon} width={48} height={48} />
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
                  onClick={() =>
                    dispatch({
                      type: "OPEN_DRAWER",
                      value: false,
                    })
                  }
                >
                  <Image alt="more" src={Chevron} width={10} height={16} />
                </div>
              </div>
            </Link>
            <Link href="/request-quote" passHref>
              <div
                css={css({
                  bg: "#ebe9e7",
                  px: 24,
                  py: 40,
                  display: "flex",
                  alignItems: "center",
                  columnGap: 38,
                  position: "relative",
                  cursor: "pointer",
                  ".chevronWrapper": {
                    opacity: 0,
                    transition: "ease all 0.3s",
                  },
                  "&:hover": {
                    ".chevronWrapper": {
                      opacity: 1,
                    },
                  },
                })}
                onClick={() =>
                  dispatch({
                    type: "OPEN_DRAWER",
                    value: false,
                  })
                }
              >
                <Image alt="quote" src={QuoteIcon} width={48} height={48} />
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
                  <Image alt="more" src={Chevron} width={10} height={16} />
                </div>
              </div>
            </Link>
            <div
              css={css({
                pointer: "cursor",
                bg: "#fdfdfd",
                px: 24,
                py: 40,
                display: "flex",
                alignItems: "center",
                columnGap: 38,
                position: "relative",
                cursor: "pointer",
                ".chevronWrapper": {
                  opacity: 0,
                  transition: "ease all 0.3s",
                },
                "&:hover": {
                  ".chevronWrapper": {
                    opacity: 1,
                  },
                },
              })}
              onClick={() => {
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "contact"
                      ? true
                      : !state.openDrawer,
                });
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "contact",
                });
              }}
            >
              <Image alt="Enquiry" src={EnquiryIcon} width={48} height={48} />
              <Text variant="Display-XXSmall" altFont>
                General enquiry
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
                <Image alt="more" src={Chevron} width={10} height={16} />
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === "cart" && (
        <>
          <div
            css={css({
              height: "100%",
              overflow: "scroll",
              pt: 0,
              pb: 36,
              px: 24,
            })}
          >
            <div
              onClick={() =>
                dispatch({
                  type: "OPEN_DRAWER",
                  value: false,
                })
              }
              css={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 12,
                py: 16,
                cursor: "pointer",
                color: theme.colors.stoneTints[8],
              })}
            >
              <Text
                variant="Body-XSmall"
                altFont
                css={css({ textTransform: "uppercase", color: "#000" })}
              >
                Close
              </Text>
              <CloseIcon
                css={css({
                  width: 12,
                  height: 12,
                  color: theme.colors.stoneTints[8],
                })}
              />
            </div>
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
              {state?.selectedProducts?.length > 0 &&
                state.selectedProducts.map((product) => {
                  return (
                    <ProductCard
                      isSelected={
                        state.selectedProducts.findIndex(
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
                  textDecoration: "none",
                },
              },
            })}
          >
            {selectedProducts?.length > 0 && (
              <ArrowButton
                mode="light"
                title="Order Samples"
                link="/checkout"
              />
            )}
            <Link href="/terrazzo" passHref>
              <a css={css({ color: "#fff", marginTop: "20px" })}>
                <Text variant="Body-Small" css={css({ color: "#fff" })}>
                  Continue Selections
                </Text>
              </a>
            </Link>
          </div>
        </>
      )}
      {tab === "share-selection" && (
        <div
          css={css({
            height: "100%",
            overflow: "scroll",
            pt: 0,
            pb: 108,
            px: 24,
          })}
        >
          <div
            onClick={() =>
              dispatch({
                type: "OPEN_DRAWER",
                value: false,
              })
            }
            css={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 12,
              py: 16,
              cursor: "pointer",
              color: theme.colors.stoneTints[8],
            })}
          >
            <Text
              variant="Body-XSmall"
              altFont
              css={css({ textTransform: "uppercase" })}
            >
              Close
            </Text>
            <CloseIcon
              css={css({
                width: 12,
                height: 12,
                color: theme.colors.stoneTints[8],
              })}
            />
          </div>
          <div css={css({ display: "flex", alignItems: "center" })}>
            <Text variant="Display-Small" altFont>
              Send your list of selections to your inbox or share with someone
              else.
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
              <span
                css={css({
                  fontFamily: 1,
                  fontSize: 1,
                  lineHeight: 4,
                  fontWeight: 0,
                })}
              >
                About you
              </span>
              <input css={css(fieldStyles)} placeholder="Name"></input>
              <input css={css(fieldStyles)} placeholder="Email Address"></input>
              <label css={css({ mb: 1, mt: 2 })}>
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
                  Same as sender{" "}
                </span>
              </label>
              <input css={css(fieldStyles)} placeholder="Name"></input>
              <input css={css(fieldStyles)} placeholder="Email Address"></input>
              <input css={css(fieldStyles)} placeholder="Title"></input>
              <textarea
                css={css(textareaStyles)}
                placeholder="Message"
              ></textarea>
              <ArrowButton
                mode="dark"
                title="Submit"
                link="#"
                fullWidth
                size=""
              />
            </form>
          </div>
        </div>
      )}
      {tab === "need-more-selection" && (
        <div
          css={css({
            height: "100%",
            overflow: "scroll",
            pt: 0,
            pb: 108,
            px: 24,
          })}
        >
          <div
            onClick={() =>
              dispatch({
                type: "OPEN_DRAWER",
                value: false,
              })
            }
            css={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 12,
              py: 16,
              cursor: "pointer",
              color: theme.colors.stoneTints[8],
            })}
          >
            <Text
              variant="Body-XSmall"
              altFont
              css={css({ textTransform: "uppercase" })}
            >
              Close
            </Text>
            <CloseIcon
              css={css({
                width: 12,
                height: 12,
                color: theme.colors.stoneTints[8],
              })}
            />
          </div>
          <div css={css({ display: "flex", alignItems: "center" })}>
            <Text variant="Display-Small" altFont>
              Need more than six samples? <br />
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
                title="Submit"
                link="#"
                fullWidth
                size=""
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectionCart;

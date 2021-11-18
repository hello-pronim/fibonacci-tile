import {
  DisplayXLarge,
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
  DisplayXXSmall,
  DisplayOverline,
  BodyXLarge,
  BodyLarge,
  BodyRegular,
  BodySmall,
  BodyXSmall,
} from "./styles";

const component = new Map([
  //titles
  ["Display-XLarge", DisplayXLarge],
  ["Display-Large", DisplayLarge],
  ["Display-Medium", DisplayMedium],
  ["Display-Small", DisplaySmall],
  ["Display-XSmall", DisplayXSmall],
  ["Display-XXSmall", DisplayXXSmall],
  ["Display-Overline", DisplayOverline],
  //body
  ["Body-XLarge", BodyXLarge],
  ["Body-Large", BodyLarge],
  ["Body-Regular", BodyRegular],
  ["Body-Small", BodySmall],
  ["Body-XSmall", BodyXSmall],
]);
type TextTypes = {
  Base: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant:
    | "Display-XLarge"
    | "Display-Large"
    | "Display-Medium"
    | "Display-Small"
    | "Display-XSmall"
    | "Display-XXSmall"
    | "Display-Overline"
    | "Body-XLarge"
    | "Body-Large"
    | "Body-Regular"
    | "Body-Small"
    | "Body-XSmall";
  children: React.ReactNode;
  color?: string;
  altFont?: boolean;
};

const Text = ({ Base, variant, children, ...props }: TextTypes) => {
  const textVariant = component.get(variant);
  return <Base css={textVariant({ ...props })}>{children}</Base>;
};
export default Text;

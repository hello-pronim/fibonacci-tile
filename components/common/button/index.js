import Link from "next/link";
import classnames from "classnames";
import {
    ButtonWrapper
} from "./styles";

export default function Button({ title, link, buttonStyle }) {
  // const buttonTheme = buttonStyle === "light" ? styles.light : styles.dark;
  return (
    <ButtonWrapper mode={"dark"}>
        <Link href={link}>
            <a>{title}</a>
        </Link>
    </ButtonWrapper>
  );
}

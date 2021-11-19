import Link from "next/link";
import classnames from "classnames";
import {
    ButtonWrapper
} from "./styles";

export default function Button({ title, link }) {
  return (
    <ButtonWrapper mode={"dark"} visibleArrow={true} visibleBorder={true}>
        <Link href={link}>
            <a>{title}</a>
        </Link>
    </ButtonWrapper>
  );
}

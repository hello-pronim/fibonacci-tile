import Link from "next/link";
import { ButtonWrapper } from "./styles";

export default function Button({ title, link, mode }) {
  return (
    <ButtonWrapper mode={mode} visibleArrow={true} visibleBorder={true}>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </ButtonWrapper>
  );
}

import Link from "next/link";
import { ButtonWrapper } from "./styles";

export default function Button({ title, link, mode, visibleArrow = true }) {
  return (
    <ButtonWrapper mode={mode} visibleArrow={visibleArrow} visibleBorder={true}>
      <Link href={link} passHref>
        <a>{title}</a>
      </Link>
    </ButtonWrapper>
  );
}

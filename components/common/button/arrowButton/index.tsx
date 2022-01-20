import Link from "next/link";
import { ArrowButtonWrapper } from "./styles";

export default function ArrowButton({
  title,
  link,
  mode,
  visibleArrow = true,
}) {
  return (
    <ArrowButtonWrapper
      mode={mode}
      visibleArrow={visibleArrow}
      visibleBorder={true}
    >
      <Link href={link} passHref>
        <a>{title}</a>
      </Link>
    </ArrowButtonWrapper>
  );
}

import Link from "next/link";
import { ArrowButtonWrapper } from "./styles";

export default function ArrowButton({
  title,
  link,
  mode,
  visibleArrow = true,
  fullWidth = false,
  size = "",
  bgColor = "transparent"
}) {
  return (
    <ArrowButtonWrapper
      mode={mode}
      visibleArrow={visibleArrow}
      visibleBorder={true}
      fullWidth={fullWidth}
      size={size}
      bgColor={bgColor}
    >
      <Link href={link} passHref>
        <a>{title}</a>
      </Link>
    </ArrowButtonWrapper>
  );
}

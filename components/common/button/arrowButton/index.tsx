import Link from "next/link";
import { ArrowButtonWrapper } from "./styles";

export default function ArrowButton({
  title,
  link = null,
  mode = "",
  visibleArrow = true,
  fullWidth = false,
  size = "",
  bgColor = "transparent",
  onClick = null,
  disabled = false,
  target = "_self",
}) {
  return (
    <ArrowButtonWrapper
      mode={mode}
      visibleArrow={visibleArrow}
      visibleBorder={true}
      fullWidth={fullWidth}
      size={size}
      bgColor={bgColor}
      disabled={disabled}
    >
      {link && (
        <Link href={link} passHref>
          <a target={target}>{title}</a>
        </Link>
      )}
      {!link && onClick && (
        <button onClick={onClick} className="bttnArrow">
          {title}
        </button>
      )}
      {!link && !onClick && (
        <button type="submit" className="bttnArrow">
          {title}
        </button>
      )}
    </ArrowButtonWrapper>
  );
}

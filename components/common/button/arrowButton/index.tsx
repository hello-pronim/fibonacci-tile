import Link from "next/link";
import { ArrowButtonWrapper } from "./styles";

export default function ArrowButton({
  title,
  link,
  mode,
  visibleArrow = true,
  fullWidth = false,
  size = "",
  bgColor = "transparent",
  onClick = null,
  disabled = false
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
      {link && 
        <Link href={link} passHref>
          <a>{title}</a>
        </Link>
      }
      {!link && onClick &&
        <button onClick={onClick} className="bttnArrow">{title}</button>
      }
    </ArrowButtonWrapper>
  );
}

import React from "react";
import Link from "next/link";
import { Wrapper, Label } from "./styles";
import Arrow from "@components/common/icons/arrow";

const Button = ({ children, ...props }) => {
  return (
    <Link href={props.href} passHref>
      <Wrapper>
        {children && <Label>{children}</Label>}
        <Arrow width={30} />
      </Wrapper>
    </Link>
  );
};

export default Button;

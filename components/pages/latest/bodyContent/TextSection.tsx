import React, { useEffect, useState } from "react";
import Text from "@components/common/typography";
import { TextCol, Ol, Ul } from "./styles";
import Container from "@components/common/layout/container";
import css from "@styled-system/css";

const TextSection = () => {
  const useWidth = () => {
    if (process.browser) {
      const [width, setWidth] = useState(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [width]);
      return width;
    }
    return 0;
  };
  const windowWidth = useWidth();

  return (
    <Container css={css({ bg: "#FFFFF8" })}>
      <TextCol>
        <Text as="h2" variant="Display-Small">
          Laoreet pulvinar velit sit posuere enim
        </Text>

        <Text as="h5" variant="Body-Large">
          Paragraph reet pulvinar velit sit posuere enim, amet erat. Vel et, ut
          pellentesque neque, risus. Lacus, auctor quis feugiat pellentesque
          scelerisque velit mattis. Arcu amet purus fusce lectus. Nisl, proin
          blandit amet, mattis bibendum sed <br></br> <br></br> Nulla at sit sed
          tellus tincidunt vulputate. Scelerisque ullamcorper scelerisque amet,
          risus, semper sed eget semper orci. Dolor ultricies donec id metus
          tempus hac proin. Diam dolor eget ut augue mauris consequat. Tristique
          nisi, lacus mi viverra egestas vel tristique. Penatibus tortor odio
          lacus amet, etiam cras non augue sit. Dignissim nunc, scelerisque sed
          neque, quis et. Purus{" "}
        </Text>
        <Text as="h5" variant="Body-Large">
          Laoreet pulvinar velit sit posuere enim:
          <Ul>
            <li>Laoreet pulvinar velit sit posuere enim, amet erat.</li>
            <li>Vel et, ut pellentesque neque, risus. </li>
            <li>
              Lacus, auctor quis feugiat pellentesque scelerisque velit mattis.{" "}
            </li>
            <li>
              Arcu amet purus fusce lectus. Nisl, proin blandit amet, mattis
              bibendum sed.
            </li>
          </Ul>
        </Text>

        <Text as="h5" variant="Body-Large">
          Laoreet pulvinar velit sit posuere enim:
          <Ol>
            <li>Laoreet pulvinar velit sit posuere enim, amet erat.</li>
            <li>Vel et, ut pellentesque neque, risus. </li>
            <li>
              Lacus, auctor quis feugiat pellentesque scelerisque velit mattis.{" "}
            </li>
            <li>
              Arcu amet purus fusce lectus. Nisl, proin blandit amet, mattis
              bibendum sed.
            </li>
          </Ol>
        </Text>
      </TextCol>
    </Container>
  );
};
export default TextSection;

//@ts-nocheck
import React from "react";
import { parseDocument } from "htmlparser2";
import Text from "@components/common/typography";
import { OrderedList, UnorderedList } from "@components/common/lists";
import { css } from "@styled-system/css";

const richTextRenderer = (content, options = null) => {
  const Elements = new Map(
    options
      ? options
      : [
          [
            "p",
            (component) => (
              <Text as="p" variant="Body-Large">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "a",
            (component) => (
              <Text as="a" href={component.attribs.href} variant="Body-Large">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "h1",
            (component) => (
              <Text as="h1" variant="Display-XLarge">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "h2",
            (component) => (
              <Text as="h2" variant="Display-Large">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "h3",
            (component) => (
              <Text as="h3" variant="Display-Medium" css={css({ pb: 80 })}>
                {innards(component)}
              </Text>
            ),
          ],
          [
            "h4",
            (component) => (
              <Text as="h4" variant="Body-XLarge" css={css({ pb: 40 })}>
                {innards(component)}
              </Text>
            ),
          ],
          [
            "h5",
            (component) => (
              <Text as="h5" variant="Display-XXSmall">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "h6",
            (component) => (
              <Text as="h6" variant="Display-Overline">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "li",
            (component) => (
              <Text as="li" variant="Body-Large">
                {innards(component)}
              </Text>
            ),
          ],
          [
            "ul",
            (component) => <UnorderedList>{innards(component)}</UnorderedList>,
          ],
          [
            "ol",
            (component) => <OrderedList>{innards(component)}</OrderedList>,
          ],
          [
            "strong",
            (component) => (
              <strong css={css({ fontWeight: 500 })}>
                {innards(component)}
              </strong>
            ),
          ],
          ["em", (component) => <em>{innards(component)}</em>],
        ]
  );

  const innards = (item) => {
    return (
      <>
        {item.children.map((child) => {
          if (child.type === "text") {
            return child.data;
          }
          if (child.type === "tag") {
            const Module = Elements.get(child.name);
            if (Module === undefined) {
              return null;
            }
            return Module(child);
          }
        })}
      </>
    );
  };

  const parsedHTML = parseDocument(content);

  return (
    <>
      {parsedHTML.children.map((component, index) => {
        const Module = Elements.get(component.name);
        if (Module === undefined) {
          return null;
        }
        return Module(component);
      })}
    </>
  );
};

export default richTextRenderer;

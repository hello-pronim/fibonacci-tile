import css from "@styled-system/css";
import styled from "@emotion/styled";

export const OrderedList = styled("ol")(
  css({
    display: 'block',
    listStyleType: 'decimal',
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 30,
    'li > ol': {
        listStyleType: 'lower-alpha',
        'li > ol': {
            listStyleType: 'lower-roman',
        },
    },
    'li > ul, ol': {
        marginTop: 15,
    },
  })
);

export const UnorderedList = styled("ol")(
    css({
      display: 'block',
      listStyleType: 'disc',
      marginTop: 30,
      marginBottom: 15,
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 30,
      'li > ul, ol': {
          marginTop: 15,
      },
    })
  );
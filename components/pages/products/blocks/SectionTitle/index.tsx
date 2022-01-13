import Text from "@components/common/typography";
import style from "./styles.module.scss";
import classnames from "classnames";

function SectionTitle({ title, show }) {
  return (
    <section className={classnames(style.container, {
      [style.active]: show,
    })}>
      <Text
        as="h2"
        variant="Display-XSmall"
        color="secondary"
        altFont={true}
        className={style.title}
      >
        {title}
      </Text>
    </section>
  );
}

export default SectionTitle;

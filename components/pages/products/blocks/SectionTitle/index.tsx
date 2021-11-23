import Text from "@components/common/typography";
import style from "./styles.module.scss";

function SectionTitle({ title }) {
  return (
    <section className={style.container}>
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

import Text from "@components/common/typography";
import style from "./styles.module.scss";

function SectionTitle({ title }) {
  return (
    <section className={style.container}>
      <Text
        Base="h2"
        variant="Display-XSmall"
        color="secondary"
        altFont={true}
      >
        {title}
      </Text>
    </section>
  );
}

export default SectionTitle;

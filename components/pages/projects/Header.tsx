import Header from "@components/common/header";
import styles from "./styles.module.scss";

const ProjectsHeader = ({ mode = "light" }) => {
  return (
    <section className={styles.headerContainer}>
      <Header mode={mode} position="absolute" />
    </section>
  );
};

export default ProjectsHeader;

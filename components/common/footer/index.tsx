import style from "./footer.module.scss";
import FooterBottom from "./footerBottom";

export default function Footer() {
  return <div className={style.container}>
    <FooterBottom/>
  </div>;
}

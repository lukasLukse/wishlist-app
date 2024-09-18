import styles from "./styles.module.css";

type FooterProps = {
  copyrightTitle: string;
};

const Footer = ({ copyrightTitle }: FooterProps) => {
  return <div className={styles.main}>{copyrightTitle}</div>;
};

export default Footer;

import styles from "./Beginning.module.css";
import { NavLink } from "react-router-dom";
import mrPes from "../../videos/preview.mp4";

export const Beginning = () => {
  return (
    <div className={styles.body}>
      <NavLink to="/prolog">
        <button className={`${styles.cyan} ${styles.noselect}`}>
          Что происходит?
        </button>
      </NavLink>
      <video autoPlay>
        <source src={mrPes} type="video/mp4" />
      </video>
    </div>
  );
};

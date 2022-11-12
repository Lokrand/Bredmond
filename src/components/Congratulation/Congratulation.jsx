import styles from "./Congratulation.module.css";
import mrPes from "../../videos/grats.mp4";
import { NavLink } from "react-router-dom";

export const Congratulation = () => {
  return (
    <div className={styles.body}>
      <NavLink to='/about'>
        <button className={`${styles.yellow} ${styles.noselect}`}>
          О проекте
        </button>
      </NavLink>
      <video autoPlay className={styles.video}>
        <source src={mrPes} type="video/mp4" />
      </video>
    </div>
  );
};

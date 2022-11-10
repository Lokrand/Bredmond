import { Modal } from "../Modal/Modal"
import { useSelector } from "react-redux";
import styles from './InsideBurrel.module.css';
export const InsideBurrel = ({ active, setActive }) => {
  const data = useSelector((state) => state.getDetails.details);
  return (
    <Modal active={active} setActive={setActive}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.text}>{data.content}</p>
    </Modal>
  )
}
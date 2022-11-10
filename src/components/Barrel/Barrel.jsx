import styles from './Barrel.module.css';
import { Bochka } from '../../icons/Bochka';

export const Barrel = ({ onClick }) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <Bochka />
    </div>
  )
}
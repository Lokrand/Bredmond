import styles from './Preview.module.css';
import { NavLink } from "react-router-dom";

export const Preview = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Привет!</h1>
      <h2 className={styles.subtitle}>Хочу поздравить тебя с днём рождения, поэтому записал тебе видео-поздравление</h2>
      <p>Оно прямо на следующей странице, переходи скорей!!!</p>
      <p>Но будь готов, видео сразу начнётся!</p>
      <div className={styles.container}>
        <NavLink to='/beginning' className={styles.animated_word}>Вперёд</NavLink>
      </div>
    </div>
  )
}
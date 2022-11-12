import { Bubka } from "../../icons/Bubka";
import styles from "./FindImposter.module.css";
import Typewriter from "typewriter-effect";
import Dialog from "../../images/dialog.svg";
import cat from "../../images/cat_3.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useSound from 'use-sound';
import sound from '../../sound/findImposter.mp3';

export const FindImposter = () => {
  const [state, setState] = useState(false)
  setTimeout(() => {
    setState(true);
  }, 2000)
  const [play] = useSound(sound);
  useEffect((() => {
    play()
  }), [play])
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.support}>
            <img src={cat} alt="Игривый кот" className={styles.image} />
          </div>
          <div className={styles.dialog__container}>
            <img src={Dialog} alt="Окошко диалога" className={styles.dialog} />
            <div class={styles.typewriter}>
              <p></p>
            </div>
          </div>
          <div className={styles.typeWriter}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(
                    "О, мой хвост! Бубка оказалась настолько сильна, что вызвала разрыв реальности. Мы вычислили её корабль и пришли по её следу, но она скрывается где-то неподалёку..."
                  )
                  .deleteAll(1)
                  .changeDelay(50)
                  .typeString(
                    "Тебе необходимо найти её, пока не стало слишком поздно, поторопись! ^_^ PS : Я не играюсь, это глупое пёрышко само напало на меня..."
                  )
                  .start();
              }}
            />
          </div>
        </div>
        {
          state ? (
        <div className={styles.bubka}>
          <NavLink to="/throneRoom">
            <Bubka />
          </NavLink>
        </div>
          ) : null
        }
      </div>
    </div>
  );
};

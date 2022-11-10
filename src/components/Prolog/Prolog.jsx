import Dialog from "../../images/dialog.svg";
import { Imposter } from "../../icons/Imposter";
import styles from "./Prolog.module.css";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useSound from "use-sound";
import sound from "../../sound/imposter.mp3";

export const Prolog = () => {
  const [play] = useSound(sound);

  useEffect(() => {
    play();
  }, [play]);
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.imposter}>
            <Imposter />
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
                    "Паштетик за 10 евро мне в глотку, а ты ещё кто??"
                  )
                  .pauseFor(0)
                  .deleteAll(1)
                  .changeDelay(50)
                  .typeString(
                    "Ха-мур-ха! Значит ты его брат... Я украл поздравление Димона пока он спал ня..."
                  )
                  .pauseFor(0)
                  .deleteAll(1)
                  .changeDelay(40)
                  .typeString(
                    "Тебе придётся постараться чтобы найти его и понять кто я... аха-мур-ха!"
                  )
                  .pauseFor(0)
                  .deleteAll(1)
                  .changeDelay(40)
                  .typeString(
                    "Кликай по кнопке, если не боишься моих суровых испытаний... ^_^"
                  )
                  .start();
              }}
            />
          </div>
        </div>
        <NavLink to="/support" className={styles.link}>
          <div className={styles.button}>
            <p className={styles.btnText}>READY?</p>
            <div className={styles.btnTwo}>
              <p className={styles.btnText2}>GO!</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

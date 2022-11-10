import styles from "./ThroneRoom.module.css";
import { CatSmile } from "../../icons/CatSmile";
import Typewriter from "typewriter-effect";
import Dialog from "../../images/dialog.svg";
import treasure from "../../images/treasure.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useSound from "use-sound";
import sound from "../../sound/throne.mp3";

export const ThroneRoom = () => {
  const [play] = useSound(sound);
  useEffect(() => {
    play();
  }, [play]);
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.support}>
          <CatSmile />
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
                  "Ура, мур-мяу! Мы, наконец, нашли поздравление Димона и поймали кота-пирата, им оказалась Бубка, хмм... Никогда бы на неё не подумал, она же такая пушистая..."
                )
                .pauseFor(400)
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Кликай на сундук, чтобы перейти к поздравлению! На этом наше приключение заканчивается, рад был помочь тебе! Удачи, мур-мяу! PS: Димон ленивая жопа и не настроил плеер, поэтому видео сразу начнётся, будь готов-мя!"
                )

                .start();
            }}
          />
        </div>
      </div>
      <NavLink to="/congratulation">
        <img
          src={treasure}
          alt="Сундук с сокровищами"
          className={styles.treasure}
        />
      </NavLink>
    </div>
  );
};

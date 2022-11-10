import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers";
import styles from "./Puzzle.module.css";
import bubka from "../../images/puzzle.jpg";
import { CatSmile } from "../../icons/CatSmile";
import Typewriter from "typewriter-effect";
import Dialog from "../../images/dialog.svg";
import useSound from 'use-sound';
import sound from '../../sound/puzzle.mp3';
export const Puzzle = () => {
  const [imgUrl, setImgUrl] = useState(bubka);
  const [play] = useSound(sound);
  useEffect((() => {
    play()
  }), [play])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };

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
                  "Мур-мяу! Нам очень повезло, один из четырёх помошников кота-пирата оказался скрытым анти-пиратским импостером и значит, он поможет нам..."
                )
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Его кличка - 'Мистер пирожок' и он раскрыл личность кота-пирата, им оказалась Бубка, но когда он скидывал нам изображение её корабля, оно повредилось!"
                )
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Мур-мяу! Тебе необходимо собрать изображение, чтобы мы смогли вычислить корабль и понять, где сейчас находится Бубка, а затем поймать её! Удачи, мур-мяу! ^_^"
                )

                .start();
            }}
          />
        </div>
      </div>
      <div className={styles.App}>
        {/* <h1>React sliding puzzle</h1> */}
        <Board imgUrl={imgUrl} />
        {/* <input value={imgUrl} onChange={handleImageChange} /> */}
      </div>
    </div>
  );
};

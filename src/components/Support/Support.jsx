import styles from './Support.module.css';
import { CatSmile } from '../../icons/CatSmile';
import Typewriter from "typewriter-effect";
import Dialog from "../../images/dialog.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import useSound from 'use-sound';
import sound from '../../sound/support.mp3';

export const Support = () => {
  const [play] = useSound(sound);
  useEffect((() => {
    play()
  }), [play])
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
                .typeString("Привет-мяу, я космический код Брэдмонд, некоторые люди путают меня с мультиваркой от Redmond, но уверяю тебя, между нами нет ничего общего...")
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Я гоняюсь за подлым похитителем поздравлений уже не один год, и мне до сих пор не удалось поймать его! Говорят, его боятся даже собаки..."
                )
                .pauseFor(100)
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Но я знаю все его уловки и помогу тебе, вместе мы справимся, мяу! Похититель - это кот-пират по кличке 'Белые лапки', хоть имя у него и милое, но он пушистое зло! "
                )
                .pauseFor(100)
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "И так как это кот-пират, следует начать поиски в его любимом месте - в заливе 'Зелёные глазки'. Отправляемся же скорей, мур-мяу! ^_^"
                )
                .start();
            }}
          />
        </div>
      </div>
      <NavLink to='/sea'>
        <button className={styles.glow_on_hover}>Найдём его!</button>
      </NavLink>
    </div>
  )
}
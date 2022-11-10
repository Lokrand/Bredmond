import { useSelector } from "react-redux";
import { actors } from "../../utils/actors";
import { Actor } from "../Actor/Actor";
import styles from "./About.module.css";
import useSound from 'use-sound';
import sound from '../../sound/aboutSound.mp3';
import { useState, useEffect } from "react";

export const About = () => {
  const [play] = useSound(sound);
  useEffect((() => {
    play()
  }), [play])
  const items = useSelector((state) => state.getActors.details);
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>В главных ролях:</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <p className={styles.title}>Кот-пират</p>
          <img src={require('../../images/BubkaPirat.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Бубка</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Digital Resistor</p>
          <img src={require('../../images/Ersh.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Ёрш</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Похититель Бредмонда №1</p>
          <img src={require('../../images/Djeki.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Джеки</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Похититель Бредмонда №2</p>
          <img src={require('../../images/Shuha.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Шуша</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Мистер Пирожок</p>
          <img src={require('../../images/Dimok.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Дымок</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Спонсор кражи</p>
          <img src={require('../../images/BubkaWithMoney.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Синьор Бурбон</p>
        </div>

      <h1 className={styles.header_second}>Над проектом работали:</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <p className={styles.title}>Дизайнер</p>
          <img src={require('../../images/imanime.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Анимешный Димон</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Технический руководитель</p>
          <img src={require('../../images/imtechlead.png')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Ничего не понимающий Димон</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Тестировщик</p>
          <img src={require('../../images/imAngry.png')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Анализирующий Димон</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Сценарист</p>
          <img src={require('../../images/scenarist.jpg')} alt="Актёр" className={styles.image}/>
          <p className={styles.name}>Придумывающий диалоги Димон</p>
        </div>
      </div>
      </div>
    </div>
  );
};

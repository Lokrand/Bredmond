import styles from "./Sea.module.css";
import { CatSmile } from "../../icons/CatSmile";
import Typewriter from "typewriter-effect";
import Dialog from "../../images/dialog.svg";
import jail from "../../images/jail.png";
import { Barrel } from "../Barrel/Barrel";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DETAILS } from "../../services/actions/actions";
import { InsideBurrel } from "../InsideBurrel/InsideBurrel";

import useSound from 'use-sound';
import sound from '../../sound/sea.mp3';

export const Sea = ({ modalActive, setModalActive }) => {
  const [play] = useSound(sound);
  const [pass, setPass] = useState('');
  const [modalIngredient, setModalIngredient] = useState(null);
  const items = useSelector((state) => state.getBurrelReducer.components);
  const onChange = (e) => {
    setPass(e.target.value)
  }
  const detailsDispatch = useDispatch();
  useEffect((() => {
    play()
  }), [play])
  const getBurrelDetails = (el) => {
    console.log('Ну кликнул, и че?')
    setModalIngredient(true);
    detailsDispatch({
      type: GET_DETAILS,
      payload: el,
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.support}>
          <CatSmile />
          <img src={jail} alt="Окошко диалога" className={styles.jail} />
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
                  "О нет, мур-мяу! Меня поймали его подельники и заточили в клетку с кодовым замком. Их было двое, и они были подозрительно похожи на крыс... Странно, кошки обычно не работают с крысами..."
                )
                .pauseFor(100)
                .deleteAll(5)
                .changeDelay(50)
                .typeString(
                  "В обычной ситуации я бы не попался так просто, но эти крысюки были настолько быстрые и маленькие, что я просто не смог ничего понять. И вот я в клетке..."
                )
                
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Мур-мяу, помоги мне спастись! Тебе необходимо найти бочку, в которой спрятан код, но будь осторожен, подлые пираты подложили туда плохие шутки, удачи-мяу! ^_^"
                )

                .start();
            }}
          />
        </div>
      </div>
      <div className={styles.items}>
        {items.map((el) => (
          <Barrel 
            key={el.id}
            onClick={() => {
              setModalActive(true);
              getBurrelDetails(el);
            }}/>
        ))}
      </div>
      <div>
        <input type='input' className={styles.input} onChange={onChange} placeholder='Введи код от замка, мя!'/>
        {(pass === '' || pass === 'Паштетик') ? (
          null
        ) : (
          <p className={styles.error}>Не правильно, мя!</p>
        )
      }
      </div>
          {pass === 'Паштетик' ? (
            <NavLink to='/game'>
              <button className={`${styles.btn_hover} ${styles.color_9}`}>Ввести код</button>
            </NavLink>) : (
              <button className={`${styles.btn_hover} ${styles.color_9}`}>Ввести код</button>
            )
          }
          {modalIngredient && (
            <InsideBurrel active={modalActive} setActive={setModalActive} />
          )}
    </div>
  );
};

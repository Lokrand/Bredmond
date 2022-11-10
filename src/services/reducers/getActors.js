import { GET_ACTORS } from "../actions/actions.js";

const initialState = {
  details: [
    {
      title: 'Кот-пират',
      name: 'Бубка',
      image: '../../images/back.png',
    },
    {
      title: 'Digital resistor',
      name: 'Ёрш',
      image: '../../images/back.png',
    },
    {
      title: 'Похититель Бредмонда №1',
      name: 'Джеки',
      image: '../../images/back.png',
    },
    {
      title: 'Похититель Бредмонда №2',
      name: 'Шуша',
      image: '../../images/back.png',
    },
    {
      title: 'Похититель правил игры 2048',
      name: 'Дымок',
      image: '../../images/back.png',
    },
    {
      title: 'Дизайнер',
      name: 'Анимешный Димон',
      image: '../../images/back.png',
    },
    {
      title: 'Технический руководитель',
      name: 'Разрабатывающий на реакте Димон',
      image: '../../images/back.png',
    },
    {
      title: 'Тестировщик',
      name: 'Анализирующий Димон',
      image: '../../images/back.png',
    },
    {
      title: 'Сценарист',
      name: 'Придумывающий диалоги Димон',
      image: '../../images/back.png',
    },
    {
      title: 'Главный герой видео',
      name: 'Поздравляющий с ДР Димон',
      image: '../../images/back.png',
    }
  ]
};

export const getActors = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTORS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
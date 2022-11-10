import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "../actions/actions.js";

const initialState = {
  components: [
    {
      title: 'Бочка с шишками',
      content: 'В бочке лишь обгрызанные шишки и больше ничего, но шишки выглядят как будто за них воевала целая армия!',
      id: '1',
    },
    {
      title: 'Бочка с шуткой',
      content: 'Ха-мур-ха, ты уже заворачиваешь пульты в пакетики, чтобы они не испортились? аха-мур-ха!',
      id: '2',
    },
    {
      title: 'Бочка с шуткой',
      content: 'Мур-мяу, надеюсь ты накрываешь экран монитора тряпкой после работы, чтобы он не пылился! аха-мур-ха',
      id: '3',
    },
    {
      title: 'Бочка с частью поздравления',
      content: 'С...тебя...гирь полегче...крыс побольше... У тебя не получилось больше ничего разобрать и ты покидаешь бочку...',
      id: '4',
    },
    {
      title: 'Бочка Digital Resostora',
      content: 'Ты открываешь бочку и видишь сено, но в нём как будто есть нора...Ты начинаешь вытаскивать сено, но тут на тебя выпрыгивает разъярённый крыс и ты с криками бросаешь бочку...',
      id: '5',
    },
    {
      title: 'Бочка с кучей кошачих волос',
      content: 'Запихнув руку поглубже в бочку, ты находишь там листок, на котором написано что ты жирный, аха-мур-ха!',
      id: '6',
    },
    {
      title: 'Пустая бочка',
      content: 'Как-то подозрительно выглядит эта пустая бочка, но на крышке выцарапано слово "Паштетик", может стоит попробовать ввести его?',
      id: '7',
    },
    {
      title: 'Бочка с подсказкой',
      content: 'Ты заглядываешь внутрь бочки, но там ничего нет. На дне бочки ты замечаешь прогрызанное отверстие. Эти подлые крысюки не желают оставлять подсказок...',
      id: '8',
    }
  ],
};

export const getBurrelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return { ...state };
    case GET_INGREDIENTS_SUCCESS:
      return { ...state, components: action.payload, loading: false };
    case GET_INGREDIENTS_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
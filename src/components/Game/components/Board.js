import React, { useState, useEffect } from "react";
import { Tile } from "./Tile";
import { Cell } from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import { GameOverlay } from "./GameOverlay";
import { CatWalk } from "../../../icons/CatWalk";
import Typewriter from "typewriter-effect";
import Dialog from "../../../images/dialog.svg";
import { NavLink } from "react-router-dom";
import useSound from 'use-sound';
import sound from '../../../sound/game.mp3';

export const BoardView = () => {
  const [play] = useSound(sound);
  useEffect((() => {
    play()
  }), [play])
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });
  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });
  const resetGame = () => {
    setBoard(new Board());
  }
  return (
    <div className="body">
      <div className='container'>
        <div className='support'>
          <CatWalk />
        </div>
        <div className='dialog__container'>
          <img src={Dialog} alt="Окошко диалога" className='dialog' />
          <div class='typewriter'>
            <p></p>
          </div>
        </div>
        <div className='typeWriter'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(
                  "Мур-мяу! Я выяснил, что кот-пират не смог бы сам организовать ограбление, его спонсировала неизвестная личность, очень влиятельная и пушистая! ^_^"
                )
                .pauseFor(400)
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Неизвестный спонсор не хочет чтобы ты проходил дальше и поэтому он спонсировал это чудестно анимированное испытание, в котором нужно набрать 2048 очков в одном блоке!"
                )
                .pauseFor(400)
                .deleteAll(1)
                .changeDelay(50)
                .typeString(
                  "Но мне удалось немного упростить правила, чтобы тебе было легче. Я переписал код этого испытания и тебе нужно набрать 256 очков в одном блоке для победы. Удачи, мур-мяу! PS: Управление на стрелочки ^_^"
                )
                .start();
            }}
          />
        </div>
      </div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>New Game</div>
        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board}/>
      </div>
      {board.hasWon() ? (
        <div className="continue">
          <NavLink to='/puzzle'>
            <button class="btn-hover color-3">^_^ ВПЕРЁД ^_^</button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

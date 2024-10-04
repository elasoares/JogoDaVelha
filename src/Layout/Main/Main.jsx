/* eslint-disable react/prop-types */
import { GameBoard } from "../../Componentes/GameBoard/GameBoard";
import styles from "./Main.module.css";
import {GameOver} from "../../Componentes/GameOver/GameOver";

export function Main({board, funcaoParaSimbolos, setGameturns,gameturns, ganhador, onClick}) {
    const partidaEncerrada = gameturns.length === 9 && !ganhador;

    function handleClickSelect(rowIndex, colIndex) {
        setGameturns((prevTurns)=>{
          const  atualJogador = funcaoParaSimbolos(prevTurns); 
          const  novoTurnos = [
          {
            square:{
            row: rowIndex, 
            col:colIndex
            },
            player: atualJogador
          }, ...prevTurns];
          return novoTurnos;
        });  
    }


    return (
        <div className={styles.container1}>
            <div className={styles.container2}>
                <GameBoard onSelectXOrO={handleClickSelect} board={board} />
                {(ganhador || partidaEncerrada) && <GameOver ganhador={ganhador} onClick={onClick}/>}
            </div>
      
        </div>
    );
}

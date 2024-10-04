/* eslint-disable react/prop-types */
import styles from "./GameOver.module.css";

export function GameOver({ ganhador, onClick }) {
    return (
      <div className={styles.container}>
        <h2 className={styles.titulo}>Game Over!</h2>
        {ganhador && <p className={styles.mensagem}>{ganhador} ganhou!</p>}
        <button className={styles.botao} onClick={onClick}>
          Jogar de novo!
        </button>
      </div>
    );
  }
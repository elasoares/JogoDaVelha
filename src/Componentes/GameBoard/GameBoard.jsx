/* eslint-disable react/prop-types */
import styles from "./GameBoard.module.css";


export function GameBoard({onSelectXOrO, board}){



/* const[pecorrerObjeto, setpercorrendoObjeto] = useState(inicioDoJogo);

function handleClick(rowIndex, colIndex){
    setpercorrendoObjeto((prev)=>{
        const percorrer = [...prev.map((percorrendoDentro)=>[...percorrendoDentro])];
        percorrer[rowIndex][colIndex]=activePlayerSimbol;
        return percorrer;
    });
    onSelectXOrO();
} */



    return(
        <ol className={`${styles['game-board']} ${styles.listCol}`}>
              {board.map((row, rowIndex)=>(
                    <li key={rowIndex}>

                        <ol className={styles.listCol}>
                            {row.map((simboloJogador, colIndex) => (
                                    <li key={colIndex}>
                                        <button onClick={()=>onSelectXOrO(rowIndex, colIndex)} 
                                        className={styles.botao} disabled={simboloJogador !== null}>
                                        {simboloJogador}
                                        </button>
                                    </li>
                                ))}
                        </ol>
                    </li>
               ))}
        </ol>
    )
}
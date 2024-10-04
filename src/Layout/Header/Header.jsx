/* eslint-disable react/prop-types */
import { Jogador } from "../../Componentes/Jogadores/Jogador";
import styles from "./Header.module.css";
import {funcaoParaSimbolos} from "../../Componentes/EscolhendoSimbolos/EscolhendoSimbolos";

export function Header({gameturns, players, setPlayers}){

    const activePlayer = funcaoParaSimbolos(gameturns);   

    function handleChangeName(simbolo, novoNome){
        setPlayers(prevJogador=>{
            return{
                ...prevJogador,
                [simbolo]: novoNome
            };
        });
    }

    return(
    <div className={styles.container}>
          <ol className={styles.players}>
                    <Jogador
                        initialName={players.X}
                        simbolo="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handleChangeName}
                    />
                    <Jogador
                        initialName={players.O}
                        simbolo="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handleChangeName}
                    />
                </ol>
    </div>
    )
}
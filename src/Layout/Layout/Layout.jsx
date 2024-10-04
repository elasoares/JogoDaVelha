
import { useState } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import styles from "./Layout.module.css";
import {JOGADOR_INICIAL} from "../../Componentes/NomeInicialDojogador/NomeIncialDoJogador";
import {COMBINACAO_JOGADOR} from '../../Componentes/CombinacaoDoGanhador/CombinacaoDoGanhador';
import {funcaoParaSimbolos} from "../../Componentes/EscolhendoSimbolos/EscolhendoSimbolos";


const inicioDoJogo=[
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function tabuleiroJogo(gameturns){
    let pecorrerObjeto = [...inicioDoJogo].map(pecorrerPeloArray=>[...pecorrerPeloArray]);

    for(const turn of gameturns){
        const {square, player } = turn;
        const { row, col } = square;
        pecorrerObjeto[row] [col] = player;
    }
    return pecorrerObjeto;
}


 function verGanhador(pecorrerObjeto, players) {
    for (const combinacao of COMBINACAO_JOGADOR) {
        const [a, b, c] = combinacao;
        const primeiraCombinacao = pecorrerObjeto[a.row][a.column];

        if (
            primeiraCombinacao &&
            pecorrerObjeto[a.row][a.column] === pecorrerObjeto[b.row][b.column] &&
            pecorrerObjeto[a.row][a.column] === pecorrerObjeto[c.row][c.column]
        ) {
            return players[primeiraCombinacao]; 
        }
    }
    return null;
}

export function Layout(){

    const [gameturns, setGameturns] = useState([]);
    const[players, setPlayers] = useState(JOGADOR_INICIAL);

    const pecorrerObjeto = tabuleiroJogo(gameturns);
    const ganhador = verGanhador(pecorrerObjeto, players);

    function handleRestart(){
        setGameturns([]);
        setPlayers(JOGADOR_INICIAL);
    }


    return(
    
    <div className={styles.container}>
        <header className={styles.header}>
        <Header  gameturns={gameturns} players={players} setPlayers={setPlayers}/>
        </header>

        <main className={styles.main}>
        <Main 
        board={pecorrerObjeto} 
        gameturns={gameturns} 
        ganhador={ganhador} 
        setGameturns={setGameturns} 
        funcaoParaSimbolos={funcaoParaSimbolos}
        onClick={handleRestart}   
        />
        </main>

    </div>
    
)
}
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Jogador.module.css";


export function Jogador({initialName, simbolo, isActive, onChangeName}){
    const [editar, setEditar] = useState(false);
    const [exibirNome, setExibirNome] = useState(initialName)

    function handleClick(){
        setEditar(!editar);

        if(editar){
        onChangeName(simbolo, exibirNome);
       }
    }

    function handleChange(event){
        const{value} = event.target;
        setExibirNome(value);
    }


    return(

      <li className={`${isActive ? styles.active : ''} ${styles["container-lista"]}`}>
    
      {!editar ? (
        <span className={styles["container-span-jogador"]}>
        <span className={styles["nome-jogador"]}>{exibirNome}</span>
        <span className={styles["simbolo-jogador"]}>{simbolo}</span>   
         </span>
      ): (
        <input 
        type="text" 
        placeholder="Seu nome" 
        onChange={handleChange} 
        required 
        value={exibirNome}
        className={styles.input}
        />
      )}
       
        <button className={styles.botao} onClick={handleClick}>
        {editar ? "Salvar" : "Editar"}
        </button>
      </li>



   
    )
}
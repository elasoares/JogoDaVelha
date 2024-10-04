/* eslint-disable react/prop-types */

export function Log({turns}){
    return(
        <ol>
            {turns.map(turn=>(
                <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    );
}
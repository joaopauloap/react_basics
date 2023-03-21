import React from 'react'
import Filho from './Filho'
export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <ul>
        <Filho nome="Renival" sobrenome={props.sobrenome}></Filho>
        {/* Operador spread */}
        <Filho {...props}></Filho> 
        <Filho {...props} nome="Reginaldo"></Filho> 
    </ul>
</div>
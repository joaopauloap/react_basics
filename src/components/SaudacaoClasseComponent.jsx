//Componente de classe
import React, {Component} from 'react'

export default class Saudacao extends Component{
    state = {
        tipo:this.props.tipo,
        nome:this.props.nome
    }

     //o estado(dado) controla o componente(visual). o react é unidirecional, não há 2-way-data-binding 
    setTipo(e){
        this.setState({tipo: e.target.value})      
    }
    setNome(e){
        this.setState({nome: e.target.value})      
    }

    render(){
        const {tipo,nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <input type="text" placeholder='Tipo...' value={tipo} onChange={e=>this.setTipo(e)}/>
                <input type="text" placeholder='Nome...' value={nome} onChange={e=>this.setNome(e)}/> 
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Produto } from '../../components'

class FiltroTag extends Component{
    constructor(props){
        super(props)
        this.filtrar = this.filtrar.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            userInput: '',
            lista: this.props.lista,
            itens: []
        }
    }
    handleChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    filtrar(event){
        event.preventDefault();
        const { lista } = this.state;
        const { userInput } = this.state;
        const intenTag = lista.filter(
            i => i.tags.indexOf(userInput) !== -1
        )
        this.setState({
            itens: intenTag
        })
       
    }
    
    render(){
        const { itens } = this.state
        let itenTag = itens.map(
            i=> 
            <Produto
            foto = {i.foto}
            texto = {i.texto}
            tags = {i.tags.join(', ')}
            key = {i.id}
            />
            )
        return(
            <div>
               <form onSubmit={this.filtrar}
                value={this.state.userInput}
                onChange={this.handleChange}>
                   <input type="text"/>
                   <button type="submit">checar</button>
               </form>
                <div>{itenTag}</div>
            </div>
        )
    }
}

export default FiltroTag;
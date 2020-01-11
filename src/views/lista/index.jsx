import React from 'react';
import { Produto } from '../../components';
import Filtro from '../Filtro';


class ListaDeProdutos extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            produtos:[
                {
                    foto: 'https://images8.kabum.com.br/produtos/fotos/98638/98638_1538485168_index_g.jpg',
                    texto: 'placa de video',
                    tags: ['eletonico, ', 'computador'], 
                    id: 1
                },
                {
                    foto: 'https://www.dentalodonthomaz.com.br/img/products/placa-de-vidro-incolor-6mm-preven_1_1200.jpg',
                    texto: 'placa de vidro',
                    tags: ['vidro, ', 'placa'], 
                    id: 2
                }
            ]
        }
    }
    render(){
        const lista = this.state.produtos.map(
            i=> <Produto
            foto = {i.foto}
            texto = {i.texto}
            tags = {i.tags}
            key = {i.id}
            />
        );
        return(
            <div>
                <Filtro />
                <div>{lista}</div>
            </div>
        )
    }
}

export default ListaDeProdutos;
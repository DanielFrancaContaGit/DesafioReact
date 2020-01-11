import React from 'react';
import './produto.scss';

function Produto({foto, texto, tags, add}){
    return(
        <div className='container-vovo'>
            <img src = {foto} alt = '' ></img>
            <div className='container-pai'>
                <div className='descricao'>{texto}</div>
                <div className = 'container-produto'>
                    <div>{tags}</div>
                    <button onClick = {add}>adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}

export default Produto;
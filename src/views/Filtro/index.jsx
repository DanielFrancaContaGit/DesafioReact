import React from 'react';
import { Produto } from '../../components'

function FiltroTag(produtos, tag){
    if(produtos.indexOf(tag) ){
        return(
            <Produto
            foto = {produtos.foto}
            texto = {produtos.texto}
            tags = {produtos.tags}
            key = {produtos.id}
            />
        )
    }
}

export default FiltroTag;
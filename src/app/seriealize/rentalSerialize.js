const serialize = ({ _id, nome, cnpj, atividades, endereco}) => {
    return { _id, nome, cnpj, atividades, endereco}
}


const paginateSerialize = ({ docs, limit, totalDocs, pageCounter, totalPages}) => {
    return { 
        veiculos: docs.map(serialize), 
        limit, 
        total: totalDocs, 
        offset: pageCounter, 
        offsets: totalPages, 
    }
}

module.exports = {serialize, paginateSerialize}
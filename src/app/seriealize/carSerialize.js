const serialize = ({ _id, modelo, cor, ano, acessorios, quantidadePassageiros }) => {
    return { _id, modelo, cor, ano, acessorios, quantidadePassageiros }
}

const paginateSeriealize = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => {
    return { 
        veiculos: docs.map(serialize), 
        limit, 
        total: totalDocs, 
        offset: pagingCounter, 
        offsets: totalPages 
    }
}

module.exports = { serialize, paginateSeriealize }
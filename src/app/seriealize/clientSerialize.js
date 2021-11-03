const serialize = ({ _id, nome, cpf, data_nascimento, email, habilitado }) => {
    return { _id, nome, cpf, data_nascimento, email, habilitado }
}

const paginateSeriealize = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => {
    return { 
        pessoas: docs.map(serialize), 
        limit, 
        total: totalDocs, 
        offset: pagingCounter, 
        offsets: totalPages 
    }
}

module.exports = { serialize, paginateSeriealize }
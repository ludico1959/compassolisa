const moment = require('moment')

const serialize = ({ _id, nome, cpf, data_nascimento, email, habilitado }) => {
    data_nascimento = moment(data_nascimento, 'YYYY/MM/DD').format('DD/MM/YYYY')

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
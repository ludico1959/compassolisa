const moment = require('moment');

const serialize = ({ _id, nome, cpf, data_nascimento, email, habilitado }) => {
  // eslint-disable-next-line
  data_nascimento = moment(data_nascimento, 'YYYY/MM/DD').format('DD/MM/YYYY');

  return { _id, nome, cpf, data_nascimento, email, habilitado };
};

const paginateSeriealize = ({ docs, limit, totalDocs, pagingCounter, totalPages }) => ({
  pessoas: docs.map(serialize),
  limit,
  total: totalDocs,
  offset: pagingCounter,
  offsets: totalPages
});

module.exports = { serialize, paginateSeriealize };

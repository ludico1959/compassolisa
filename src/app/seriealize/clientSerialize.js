const DateUtils = require('../utils/dateUtils');

const serialize = ({ _id, nome, cpf, data_nascimento, email, habilitado }) => {
  // eslint-disable-next-line
  data_nascimento = DateUtils.formatToRequest(data_nascimento);

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

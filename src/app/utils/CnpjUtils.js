const InvalidCnpj = require('../errors/rental/InvalidCnpj');

class CnpjUtils {
  testCnpj(strCNPJ) {
    const numbersCNPJ = strCNPJ.replace(/[^\d]+/g, '');

    if (numbersCNPJ === '') throw new InvalidCnpj(strCNPJ);

    if (numbersCNPJ.length !== 14) throw new InvalidCnpj(strCNPJ);

    // Elimina CNPJs invalidos conhecidos
    if (
      numbersCNPJ === '00000000000000' ||
      numbersCNPJ === '11111111111111' ||
      numbersCNPJ === '22222222222222' ||
      numbersCNPJ === '33333333333333' ||
      numbersCNPJ === '44444444444444' ||
      numbersCNPJ === '55555555555555' ||
      numbersCNPJ === '66666666666666' ||
      numbersCNPJ === '77777777777777' ||
      numbersCNPJ === '88888888888888' ||
      numbersCNPJ === '99999999999999'
    )
      throw new InvalidCnpj(strCNPJ);

    // Valida DVs
    let tamanho = numbersCNPJ.length - 2;
    let numeros = numbersCNPJ.substring(0, tamanho);
    const digitos = numbersCNPJ.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * (pos - 1);
      if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== digitos.charAt(0)) throw new InvalidCnpj(strCNPJ);

    tamanho += 1;
    numeros = numbersCNPJ.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let j = tamanho; j >= 1; j--) {
      soma += numeros.charAt(tamanho - j) * (pos - 1);
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== digitos.charAt(1)) throw new InvalidCnpj(strCNPJ);
  }
}

module.exports = new CnpjUtils();

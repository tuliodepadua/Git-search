const feedBackStatusError = (statusCode) => {
  switch (statusCode) {
    case 404:
      return 'Usuário não foi encontrado';

    default:
      return 'Erro não mapeado';
  }
};

export default feedBackStatusError;

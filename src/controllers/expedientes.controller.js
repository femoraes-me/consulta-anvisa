function getExpedienteMock(req, res) {
  const { codigo } = req.params;

  // validação básica: obrigatório e só números
  if (!codigo || !/^\d+$/.test(codigo)) {
    return res.status(400).json({
      error: {
        code: 'INVALID_INPUT',
        message: 'O código do expediente deve conter apenas números.'
      }
    });
  }

  // mock simples (vamos substituir pela chamada real depois)
  return res.json({
    empresa: {
      cnpj: '00000000000000',
      razaoSocial: 'EMPRESA MOCK'
    },
    processo: {
      numero: '00000000000000000000'
    },
    peticao: {
      expediente: codigo,
      dataEntrada: '2022-10-14T00:00:00.000-0300',
      protocolo: '20220000000000000',
      assunto: {
        codigo: '000',
        descricao: 'ASSUNTO MOCK'
      },
      situacao: {
        rotulo: 'Mock',
        descricao: 'Resposta mock para validação do endpoint.',
        data: null
      },
      area: {
        sigla: 'MOCK',
        nome: 'ÁREA MOCK',
        remessa: null,
        recebimento: null
      }
    }
  });
}

module.exports = {
  getExpedienteMock
};
``
import Carro from "@/model/Carro";
import DBService from "@/services/DBService";

export default {
  colecao: "carros",

  /** Adicionar novo carro */
  async adicionarCarro(carro) {
    const carroModel = new Carro(
      null,
      carro.problema,
      carro.marca,
      carro.modelo,
      carro.ano_fabricacao,
      carro.cor,
      carro.placa,
      carro.cliente_id
    );

    // Busca os dados do cliente vinculado
    await carroModel.getCliente(carroModel.cliente_id);

    // Salva no banco
    await DBService.adicionar(this.colecao, carroModel);
  },

  /** Listar todos os carros */
  async listarCarros() {
    const carros = await DBService.listar(this.colecao);
    return carros.map((carro) => {
      const model = new Carro(
        carro.key,
        carro.data.nome,
        carro.data.marca,
        carro.data.modelo,
        carro.data.ano_fabricacao,
        carro.data.cor,
        carro.data.placa,
        carro.data.cliente_id
      );
      model.getCliente(model.cliente_id);
      return model;
    });
  },

  /** Atualizar carro existente */
  async atualizarCarro(id, dados) {
    await DBService.atualizar(this.colecao, dados, id);
  },

  /** Recuperar um carro específico */
  async capturarCarroId(id) {
    const carro = await DBService.recuperarDocumento(this.colecao, id);
    const model = new Carro(
      id,
      carro.problema,
      carro.marca,
      carro.modelo,
      carro.ano_fabricacao,
      carro.cor,
      carro.placa,
      carro.cliente_id
    );
    await model.getCliente(model.cliente_id);
    return model;
  },

  /** Excluir um carro */
  async excluirCarro(id) {
    await DBService.excluir(this.colecao, id);
  },
};


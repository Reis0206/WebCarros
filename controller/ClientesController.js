import Cliente from "@/model/Cliente";
import DBService from "@/services/DBService"

export default {

  colecao: 'clientes',

  async listarTutores() {
    const clientes = await DBService.listar(this.colecao);
    return clientes.map(cliente => new Cliente(cliente.key, cliente.data.nome, cliente.data.endereco, cliente.data.telefones));
  },

  async capturarTutorId (chave) {
    const cliente = await DBService.recuperarDocumento(this.colecao, chave);
    return new Cliente(null, cliente.nome, cliente.endereco, cliente.telefones);
  },

  async deletarTutor(chave) {
    return await DBService.deletar(this.colecao, chave);
  }

}

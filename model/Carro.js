import ClientesController from "@/controller/ClientesController";
import { format, parse } from "date-fns";

export default class Carro {
  constructor(key, nome, marca, modelo, ano_fabricacao, cor, placa, cliente_id) {
    this.id = key;
    this.nome = nome;
    this.inicial = nome?.charAt(0).toUpperCase() || null;
    this.marca = marca;
    this.modelo = modelo;
    this.ano_fabricacao = ano_fabricacao;
    this.cor = cor;
    this.placa = placa?.toUpperCase() || "";
    this.cliente_id = cliente_id;
    this.cliente = {};
  }

  /**
   * Formata o ano de fabricação no formato BR (ex: 2020 -> 2020)
   * Mantido o método de exemplo de data para caso precise no futuro
   */
  formatarDataBrasilParaAmerica(data) {
    if (!data) return "";
    if (data.includes("-")) {
      return this.formatarDataAmericaParaBrasil(data);
    }
    const dataParse = parse(data, "dd/MM/yyyy", new Date());
    return format(dataParse, "yyyy-MM-dd");
  }

  formatarDataAmericaParaBrasil(data) {
    if (!data) return "";
    const dataParse = parse(data, "yyyy-MM-dd", new Date());
    return format(dataParse, "dd/MM/yyyy");
  }

  async getCliente(cliente_id) {
    try {
      this.cliente = await ClientesController.capturarClienteId(cliente_id);
    } catch (error) {
      console.warn("Erro ao buscar cliente:", error);
    }
  }
}


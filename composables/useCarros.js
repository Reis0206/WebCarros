import CarroController from "@/controller/CarroController";
import { onMounted, ref } from "vue";

export function useCarros() {
  const carro = ref({});
  const carros = ref([]);

  const adicionarCarro = async () => {
    await CarroController.adicionarCarro(carro.value);
    await listarCarros(); // atualiza a lista após adicionar
  };

  const listarCarros = async () => {
    carros.value = await CarroController.listarCarros();
  };

  const atualizarCarro = async (id, dados) => {
    await CarroController.atualizarCarro(id, dados);
    await listarCarros();
  };

  const excluirCarro = async (id) => {
    await CarroController.excluirCarro(id);
    await listarCarros();
  };

  const capturarCarro = async (id) => {
    carro.value = await CarroController.capturarCarroId(id);
  };

  onMounted(() => {
    listarCarros();
  });

  return {
    carro,
    carros,
    listarCarros,
    adicionarCarro,
    atualizarCarro,
    excluirCarro,
    capturarCarro,
  };
}

import TutorsController from "@/controller/ClientesController";
import { onMounted, ref } from "vue";

export function useTutor() {

  const cliente = ref({});
  const clientes = ref([]);

  const capturarTutores = async () => {
    clientes.value = await TutorsController.listarTutores();
  }

  const capturarTutorId = async (cliente) => {
    cliente.value = await TutorsController.capturarTutorId(cliente);
  }

  onMounted(() => {
    capturarTutores();
  });

  return {
    capturarTutores,
    capturarTutorId,
    clientes,
    cliente
  };

}

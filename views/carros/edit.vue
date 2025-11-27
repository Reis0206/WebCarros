<template>
  <div class="w-full">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
      <legend class="fieldset-legend">Editando carro</legend>

      <label class="label">problema do carro</label>
      <input
        type="text"
        class="input w-full"
        placeholder="problema do carro"
        v-model="form.nome"
      />

      <label class="label">Marca</label>
      <input
        type="text"
        class="input w-full"
        placeholder="Marca"
        v-model="form.marca"
      />

      <label class="label">Modelo</label>
      <input
        type="text"
        class="input w-full"
        placeholder="Modelo"
        v-model="form.modelo"
      />

      <label class="label">Ano de fabricação</label>
      <input
        type="number"
        class="input w-full"
        placeholder="Ano de fabricação"
        v-model="form.ano_fabricacao"
      />

      <label class="label">Cor</label>
      <input
        type="text"
        class="input w-full"
        placeholder="Cor"
        v-model="form.cor"
      />

      <label class="label">Placa</label>
      <input
        type="text"
        class="input w-full uppercase"
        placeholder="ABC-1234"
        v-model="form.placa"
      />

      <label class="label">Cliente</label>
      <select class="select w-full" v-model="form.cliente_id">
        <option disabled value="">Selecione um cliente</option>
        <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
          {{ cliente.nome }}
        </option>
      </select>

      <button class="btn btn-neutral mt-4" @click="atualizarCarro">Salvar alterações</button>
    </fieldset>

    <!-- Toast -->
    <div class="toast" v-if="toastVisible">
      <div class="alert alert-info">
        <span><strong>{{ form.nome }}</strong> atualizado com sucesso.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import DBService from "@/services/DBService";
import { useClientes } from "@/composables/useCliente";

const route = useRoute();
const router = useRouter();
const { clientes } = useClientes();

const toastVisible = ref(false);

const form = reactive({
  nome: "",
  marca: "",
  modelo: "",
  ano_fabricacao: "",
  cor: "",
  placa: "",
  cliente_id: "",
});

async function capturarCarro(id) {
  const document = await DBService.recuperarDocumento("carros", id);
  form.nome = document.nome;
  form.marca = document.marca;
  form.modelo = document.modelo;
  form.ano_fabricacao = document.ano_fabricacao;
  form.cor = document.cor;
  form.placa = document.placa;
  form.cliente_id = document.cliente_id;
}

async function atualizarCarro() {
  await DBService.atualizar(
    "carros",
    {
      nome: form.nome,
      marca: form.marca,
      modelo: form.modelo,
      ano_fabricacao: form.ano_fabricacao,
      cor: form.cor,
      placa: form.placa,
      cliente_id: form.cliente_id,
    },
    route.params.id
  );

  toastVisible.value = true;

  setTimeout(() => {
    toastVisible.value = false;
    router.push({ name: "carros.index" });
  }, 1500);
}

onMounted(() => {
  capturarCarro(route.params.id);
});
</script>

<style lang="scss" scoped></style>

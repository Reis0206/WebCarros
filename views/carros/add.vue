<template>
  <div class="w-full">
    <form @submit.prevent="adicionarCarro(carro)">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <legend class="fieldset-legend">Adicionando carros</legend>

        <!-- Nome -->
        <label class="label">problema do carro</label>
        <input
          type="text"
          class="input w-full"
          placeholder="Ex: Problema no motor"
          v-model="carro.problema"
        />

        <!-- Marca -->
        <label class="label">Marca</label>
        <input
          type="text"
          class="input w-full"
          placeholder="Ex: Toyota, Honda..."
          v-model="carro.marca"
        />

        <!-- Modelo -->
        <label class="label">Modelo</label>
        <input
          type="text"
          class="input w-full"
          placeholder="Ex: Corolla, Civic..."
          v-model="carro.modelo"
        />

        <!-- Ano de fabricação -->
        <label class="label">Ano de fabricação</label>
        <input
          type="number"
          class="input w-full"
          placeholder="Ex: 2020"
          v-model.number="carro.ano_fabricacao"
        />

        <!-- Cor -->
        <label class="label">Cor</label>
        <input
          type="text"
          class="input w-full"
          placeholder="Ex: Preto, Prata..."
          v-model="carro.cor"
        />

        <!-- Placa -->
        <label class="label">Placa</label>
        <input
          type="text"
          class="input w-full uppercase"
          placeholder="ABC-1234"
          v-model="carro.placa"
        />

        <!-- Cliente -->
        <label class="label">Cliente</label>
        <select class="select w-full" v-model="carro.cliente_id">
          <option disabled value="">Selecione um cliente</option>
          <option
            v-for="cliente in clientes"
            :key="cliente.id"
            :value="cliente.id"
          >
            {{ cliente.nome }}
          </option>
          <!-- Exibe mensagem enquanto carrega (opcional) -->
          <option v-if="clientes.length === 0 && !carregado" disabled>
            Carregando clientes...
          </option>
        </select>

        <button class="btn btn-neutral mt-4 w-full" type="submit">Adicionar</button>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import { useCarros } from "@/composables/useCarros";
import { useTutor } from "@/composables/useCliente"; // ← arquivo: useCliente.js (singular)

const { adicionarCarro, carro } = useCarros();
const { clientes } = useTutor();

</script>

<style scoped lang="scss"></style>

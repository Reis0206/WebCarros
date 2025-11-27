<template>
  <div class="mb-2">
    <breadcrumbs>
      <template #model>Carros</template>
      <template #action>Lista de Carros</template>
    </breadcrumbs>
  </div>

  <div class="card w-full bg-base-100 shadow-sm card-border">
    <div class="card-body">
      <div class="overflow-x-auto">
        <div class="flex">
          <div class="flex-1 mb-5 text-2xl">Carros</div>
          <button class="btn btn-secondary" @click="adicionar">Adicionar</button>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th><input type="checkbox" class="checkbox" /></th>
              <th>Problema</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
              <th>Placa</th>
              <th>Cliente</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="carro in carros" :key="carro.id">
              <td><input type="checkbox" class="checkbox" /></td>
              <td>{{ carro.nome }}</td>
              <td>{{ carro.marca }}</td>
              <td>{{ carro.modelo }}</td>
              <td>{{ carro.ano_fabricacao }}</td>
              <td>{{ carro.cor }}</td>
              <td>{{ carro.placa }}</td>
              <td>{{ carro.cliente?.nome || '—' }}</td>
              <td class="space-x-1">
                <router-link
                  class="btn btn-info btn-xs"
                  :to="{ name: 'carros.edit', params: { id: carro.id } }"
                >
                  Editar
                </router-link>
                <router-link
                  class="btn btn-accent btn-xs"
                  :to="{ name: 'carros.show', params: { id: carro.id } }"
                >
                  Ver
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="carros.length === 0" class="text-center text-gray-500 mt-4">
          Nenhum carro cadastrado ainda.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumbs from "@/components/breadcrumbs.vue";
import { useCarros } from "@/composables/useCarros";
import { useRouter } from "vue-router";

const router = useRouter();
const { carros } = useCarros();

const adicionar = () => {
  router.push({ name: "carros.add" });
};
</script>

<style scoped lang="scss"></style>

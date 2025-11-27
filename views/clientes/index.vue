<template>
  <div class="mb-2">
    <breadcrumbs>
      <template v-slot:model> Clientes </template>
      <template v-slot:action> Lista de Clientes </template>
    </breadcrumbs>
  </div>
  <div class="card w-full bg-base-100 shadow-sm card-border">
    <div class="card-body">
      <div class="overflow-x-auto">
        <div class="flex">
          <div class="flex-1 mb-5 text-2xl">Clientes</div>
          <button class="btn btn-second" @click="adicionar">Adicionar</button>
        </div>
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="cliente in clientes" :key="cliente.id">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar avatar-placeholder">
                    <div class="bg-neutral text-neutral-content w-12 rounded-full">
                      <span class="text-3xl">{{ cliente.inicial }}</span>
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ cliente.nome }}</div>
                    <div class="text-sm opacity-50">
                      {{ cliente.endereco?.cidade ?? "Cliente sem cidade" }}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {{ cliente.endereco?.logradouro }} {{ cliente.endereco?.numero ?? "S/N" }}
                {{ cliente.endereco?.cep }} {{ cliente.endereco?.complemento }}
                <br />
                <span class="badge badge-ghost badge-sm"
                  >{{ cliente.endereco?.cidade }}/{{ cliente.endereco?.estado }}</span
                >
              </td>
              <td>
                <div
                  v-for="telefone in cliente.telefones"
                  :key="telefone"
                  class="badge badge-xs badge-dash flex m-1"
                >
                  {{ telefone }}
                </div>
              </td>
              <th>
                <router-link
                  class="btn btn-info btn-xs"
                  :to="{ name: 'clientes.edit', params: { id: cliente.id } }"
                  >Editar</router-link
                >
              </th>
            </tr>
          </tbody>
          <!-- foot -->
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import breadcrumbs from "@/components/breadcrumbs.vue";
import { useRouter } from "vue-router";
import { useTutor } from "@/composables/useCliente";

const { clientes } = useTutor();

const router = useRouter();

const adicionar = () => {
  router.push({ name: "clientes.add" });
};
</script>

<style lang="scss" scoped></style>

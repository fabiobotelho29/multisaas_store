<script setup>
import { useRoute } from 'vue-router'
import SchedulerSchedules from '@/views/pages/scheduler/SchedulerSchedules.vue'
import SchedulerEmployees from '@/views/pages/scheduler/SchedulerEmployees.vue'
import SchedulerServices from '@/views/pages/scheduler/SchedulerServices.vue'
import SchedulerAvailables from '@/views/pages/scheduler/SchedulerAvailables.vue'
import SchedulerClients from '@/views/pages/scheduler/SchedulerClients.vue'


/** 
 * Para adicionar uma aba
 * - Criar uma view dentro da pasta @/views/pages correspondente a esta página
 * - Criar um novo indice no array tabs abaixo (vai aparecer a aba no navegador)
 * - Ajustar os textos do indice
 * - Importar o componente nesta página
 * - Criar um WindowItem na parte inferior para incluir o componente
 * 
 */

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Agendamentos', // Título da aba
    icon: 'mdi-playlist-check', // icone da aba
    tab: 'schedules', // name da aba
  },

  {
    title: 'Atendentes',
    icon: 'mdi-account-group',
    tab: 'employees',
  },
  {
    title: 'Serviços',
    icon: 'mdi-account-cog',
    tab: 'services',
  },
  {
    title: 'Horários',
    icon: 'mdi-calendar-account',
    tab: 'availables',
  },
  {
    title: 'Clientes',
    icon: 'mdi-account-star',
    tab: 'clients',
  },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'scheduler-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Schedules -->
      <VWindowItem value="schedules">
        <SchedulerSchedules />
      </VWindowItem>

      <!-- Employees -->
      <VWindowItem value="employees">
        <SchedulerEmployees />
      </VWindowItem>

      <!-- Services -->
      <VWindowItem value="services">
        <SchedulerServices />
      </VWindowItem>

      <!-- Availables -->
      <VWindowItem value="availables">
        <SchedulerAvailables />
      </VWindowItem>

      <!-- Clients -->
      <VWindowItem value="clients">
        <SchedulerClients />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: scheduler-tab
</route>

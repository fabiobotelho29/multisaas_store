<script setup>
import { useRoute } from 'vue-router'
import OffersManager from '@/views/pages/offers/OffersManager.vue'
import OffersLeads from '@/views/pages/offers/OffersLeads.vue'

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
    title: 'Gerenciamento', // Título da aba
    icon: 'mdi-cog-clockwise', // icone da aba
    tab: 'manager', // name da aba
  },
  {
    title: 'Leads',
    icon: 'mdi-account-filter',
    tab: 'leads',
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
        :to="{ name: 'offers-tab', params: { tab: item.tab } }"
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
      <!-- Account -->
      <VWindowItem value="manager">
        <OffersManager />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="leads">
        <OffersLeads />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: offers-tab
</route>

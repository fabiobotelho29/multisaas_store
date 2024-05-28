<script setup>
import { useRoute } from 'vue-router'
import TrainingVideo from '@/views/pages/training/TrainingVideo.vue'

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
    title: 'Videos', // Título da aba
    icon: 'mdi-youtube', // icone da aba
    tab: 'video', // name da aba
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
        :to="{ name: 'training-tab', params: { tab: item.tab } }"
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
      <!-- Video -->
      <VWindowItem value="video">
        <TrainingVideo />
      </VWindowItem>     
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: training-tab
</route>

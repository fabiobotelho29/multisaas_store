<script setup>
import { useRoute } from 'vue-router'
import AccountSettingsAccount from '@/views/pages/store/AccountSettingsAccount.vue'
import AccountSettingsSecurity from '@/views/pages/store/AccountSettingsSecurity.vue'
import AccountSettingsAdmin from '@/views/pages/store/AccountSettingsAdmin.vue'

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
    title: 'Dados da Empresa', // Título da aba
    icon: 'mdi-account-outline', // icone da aba
    tab: 'account', // name da aba
  },
  {
    title: 'Senha',
    icon: 'mdi-lock-open-outline',
    tab: 'password',
  },
  {
    title: 'Dados do administrador',
    icon: 'mdi-account',
    tab: 'admin',
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
        :to="{ name: 'store-tab', params: { tab: item.tab } }"
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
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="password">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Admin Account -->
      <VWindowItem value="admin">
        <AccountSettingsAdmin />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: store-tab
</route>

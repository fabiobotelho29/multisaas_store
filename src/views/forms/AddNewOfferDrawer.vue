<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const isFormValid = ref(false)
const refForm = ref()
const fullName = ref('')
const userName = ref('')
const email = ref('')
const company = ref('')
const country = ref('')
const contact = ref('')
const role = ref()
const plan = ref()
const status = ref()
const textareaValue = ref('')

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: 0,
        fullName: fullName.value,
        company: company.value,
        role: role.value,
        username: userName.value,
        country: country.value,
        contact: contact.value,
        email: email.value,
        currentPlan: plan.value,
        status: status.value,
        avatar: '',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Criar Mega Oferta"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Data início -->
              <VCol cols="12">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Data de Início"
                  type="date"
                  placeholder="Data de Início"
                />
              </VCol>

              <!-- 👉 Data Término -->
              <VCol cols="12">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Data de Término"
                  type="date"
                  placeholder="Data de Término"
                />
              </VCol>

              <!-- 👉 Horário Início -->
              <VCol cols="12">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Horário de início"
                  type="time"                  
                />
              </VCol>

              <!-- 👉 Horário Término -->
              <VCol cols="12">
                <VTextField
                  v-model="fullName"
                  :rules="[requiredValidator]"
                  label="Horário de Término"
                  type="time"                  
                />
              </VCol>

              <!-- 👉 Produto -->
              <VCol cols="12">
                <VTextField
                  v-model="country"
                  :rules="[requiredValidator]"
                  label="Produto"
                  placeholder="Ex.: Camisa Pólo Branca"
                />
              </VCol>

              <!-- 👉 Descrição -->
              <VCol cols="12">
                <VTextarea
                  v-model="textareaValue"
                  counter
                  label="Descrição"
                  placeholder="Descrição completa da Mega Oferta"
                />
              </VCol>

              <!-- 👉 Valor Inicial -->
              <VCol cols="12">
                <VTextField
                  v-model="country"
                  :rules="[requiredValidator]"
                  label="Valor Inicial"
                  placeholder="R$ 10,00"
                />
              </VCol>

              <!-- 👉 Valor Promocional -->
              <VCol cols="12">
                <VTextField
                  v-model="country"
                  :rules="[requiredValidator]"
                  label="Valor Promocional"
                  placeholder="R$ 5,00"
                />
              </VCol>

              <!-- 👉 Quantidade -->
              <VCol cols="12">
                <VTextField
                  v-model="country"
                  :rules="[requiredValidator]"
                  label="Quantidade de Cupons"
                  placeholder="10"
                  type="number"
                />
              </VCol>
              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Salvar Mega Oferta
                </VBtn>
                <VBtn
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  @click="closeNavigationDrawer"
                >
                  Cancelar
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

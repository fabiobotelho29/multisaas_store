/** 
 * Para adicionar im item ao menu
 * - Criar a página [tab].vue dentro da pasta correspondente em @/pages/
 * - Criar um indice no array abaixo apontando para esta página enviando o parametro tab
 * 
 */

export default [
  { heading: 'APP' },
  {
    title: 'Seus Dados',
    icon: { icon: 'mdi-account-edit' },
    to: { name: 'store-tab', params: { tab: 'account' } },
  },
  {
    title: 'Mega Ofgertas',
    icon: { icon: 'mdi-currency-usd' },
    to: { name: 'offers-tab', params: { tab: 'manager' } },
  },
  {
    title: 'Treinamentos',
    icon: { icon: 'mdi-youtube' },
    to: { name: 'training-tab', params: { tab: 'video' } },
  },
]

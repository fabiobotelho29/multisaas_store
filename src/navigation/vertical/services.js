/** 
 * Para adicionar im item ao menu
 * - Criar a página [tab].vue dentro da pasta correspondente em @/pages/
 * - Criar um indice no array abaixo apontando para esta página enviando o parametro tab
 * 
 */

export default [
  { heading: 'SERVICES' },
  {
    title: 'Agendador Online',
    icon: { icon: 'mdi-calendar-check-outline' },
    to: { name: 'scheduler-tab', params: { tab: 'schedules' } },
  },
]

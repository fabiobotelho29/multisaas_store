/** 
 * Para adicionar um item ao menu
 * - Criar a página que vai receber os menus dentro de @/navigation/vertical
 * - Depois de todos os passos criados lá, importa-la aqui como um componente
 * - Inerir-la no export, usando o modelo e na ordem que você quer que apareça em tela
 * 
 */

import appAndPages from './app-and-pages'
import charts from './charts'
import dashboard from './dashboard'
import forms from './forms'
import others from './others'
import uiElements from './ui-elements'
import company from './company'
import services from './services'

export default [...dashboard, ...company, ...services, ...appAndPages, ...uiElements, ...forms, ...charts, ...others]

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { createApp } from 'vue'

// Components
import App from './App.vue'

// Composables
// importa la funcion createApp de vue. vue = libreria instalada en node modules
import { registerPlugins } from '@/plugins'

// createApp instnacia (crea) vue, necesita un componente inicial a donde se monta la aplicacion
const app = createApp(App)

registerPlugins(app)

app.mount('#app')

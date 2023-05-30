import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId:
        '865795531816-9s3rn6nslv5j1gdu1jojkcbg37gp5j2j.apps.googleusercontent.com',
});

app.use(router)
app.use(pinia)

app.mount('#app')
import {createApp } from 'vue'
import {createRouter, createWebHistory } from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import App from './App.vue'
import "./styles/main.scss"
import PersonalQ1 from './components/PersonalQ1.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/PersonalQ1",
        component: PersonalQ1,
      }
    ],
  });
  
app.use(router);
app.mount("#app")


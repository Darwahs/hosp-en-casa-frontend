import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import MainPage from './components/MainPage.vue'
import RegisterProfSalud from './components/RegisterProfSalud.vue'
import RegisterFamPaciente from './components/RegisterFamPaciente.vue'
import RegisterPatient from './components/RegisterPatient.vue'
import InformationPatient from './components/InformationPatient.vue'
import LogIn from './components/LogIn.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/home',
  name: "mainPage",
  component: MainPage
},
{
  path: '/auxiliar/registerProfSalud',
  name: "registerProfSalud",
  component: RegisterProfSalud
},
{
  path: '/auxiliar/registerFamPaciente',
  name: "registerFamPaciente",
  component: RegisterFamPaciente
},
{
  path: '/auxiliar/registerPatient',
  name: "registerPatient",
  component: RegisterPatient
},
{
  path: '/auxiliar/informationPatient',
  name: "informationPatient",
  component: InformationPatient
},
{
  path: '/usuario/logIn',
  name: "logIn",
  component: LogIn
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
  });

export default router;
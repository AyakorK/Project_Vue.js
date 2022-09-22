<template>
  <HeaderComponent></HeaderComponent>
    <div class="dashboard">
      <LoginComponent msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LoginComponent from '@/components/Account/LoginComponent/LoginComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  
  export default {
    name: 'LoginView',
    components: {
      LoginComponent,
      HeaderComponent
    }
  }
  </script>
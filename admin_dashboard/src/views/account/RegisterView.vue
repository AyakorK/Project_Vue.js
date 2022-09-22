<template>
  <HeaderComponent></HeaderComponent>
    <div class="dashboard">
      <RegisterComponent msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegisterComponent from '@/components/Account/RegisterComponent/RegisterComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  
  export default {
    name: 'RegisterView',
    components: {
      RegisterComponent,
      HeaderComponent
    },
  }
  </script>

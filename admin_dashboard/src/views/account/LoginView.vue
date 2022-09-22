<template>
  <SideBarComponent/>

    <div class="dashboard">
      <LoginComponent msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LoginComponent from '@/components/Account/LoginComponent/LoginComponent.vue'
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  export default {
    name: 'LoginView',
    components: {
      LoginComponent,
      SideBarComponent
    }
  }
  </script>
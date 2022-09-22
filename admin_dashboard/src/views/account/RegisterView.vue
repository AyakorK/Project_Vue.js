<template>
  <SideBarComponent/>
    <div class="dashboard">
      <RegisterComponent msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegisterComponent from '@/components/Account/RegisterComponent/RegisterComponent.vue'

  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  
  export default {
    name: 'RegisterView',
    components: {
      RegisterComponent,
      SideBarComponent
    },
  }
  </script>

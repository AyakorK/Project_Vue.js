<template>
    <headerComponent></headerComponent>
    <div class="store">
      <StoreComponent msg="Welcome to Your Vue.js App"/>
      <DashboardComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import StoreComponent from '@/components/StoreComponent/StoreComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'

  export default {
    name: 'StoreView',
    components: {
      StoreComponent,
      DashboardComponent,
      HeaderComponent
    }
  }
  </script>
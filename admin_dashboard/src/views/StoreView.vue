<template>
    <headerComponent></headerComponent>
    <div class="store">
      <SideBarComponent/>
      <StoreComponent msg="Welcome to Your Vue.js App"/>
      <DashboardComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import StoreComponent from '@/components/StoreComponent/StoreComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'

  export default {
    name: 'StoreView',
    components: {
      SideBarComponent,
      StoreComponent,
      HeaderComponent
    }
  }
  </script>
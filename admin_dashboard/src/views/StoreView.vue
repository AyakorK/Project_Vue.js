<template>
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
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    name: 'StoreView',
    components: {
      SideBarComponent,
      StoreComponent,
      DashboardComponent
    }
  }
  </script>
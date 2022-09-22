<template>
    <div class="store">
      <SideBarComponent/>
      <StoreComponent/>
      <DashboardComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import StoreComponent from '@/components/StoreComponent/StoreComponent.vue'

  export default {
    name: 'StoreView',
    components: {
      SideBarComponent,
      StoreComponent,
    }
  }
  </script>
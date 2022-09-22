<template>
    <div class="produits">
        <SideBarComponent/>
        <ProduitsComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import ProduitsComponent from '@/components/ProduitsComponent/ProduitsComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: { 
      SideBarComponent,
      ProduitsComponent,
      DashboardComponent
    }
  }
  </script>
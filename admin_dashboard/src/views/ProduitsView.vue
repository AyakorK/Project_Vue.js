<template>
    <div class="produits">
        <ProduitsComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ProduitsComponent from '@/components/ProduitsComponent/ProduitsComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      ProduitsComponent,
      DashboardComponent
    }
  }
  </script>
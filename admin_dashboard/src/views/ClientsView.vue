<template>
    <div class="clients">
        <ClientsComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ClientsComponent from '@/components/ClientsComponent/ClientsComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      ClientsComponent,
      DashboardComponent
    }
  }
  </script>
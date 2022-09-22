<template>
    <div class="clients">
        <SideBarComponent/>
        <ClientsComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import ClientsComponent from '@/components/ClientsComponent/ClientsComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      SideBarComponent,  
      ClientsComponent,
      DashboardComponent
    }
  }
  </script>
<template>
    <div class="clients">
        <SideBarComponent/>
        <ClientsComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import ClientsComponent from '@/components/ClientsComponent/ClientsComponent.vue'
  
  export default {
    components: {
      SideBarComponent,  
      ClientsComponent,
    }
  }
  </script>
<template>
    <div class="commandes">
      <CartComponent />
        <SideBarComponent/>
        <CommandesComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import CommandesComponent from '@/components/CommandesComponent/CommandesComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      SideBarComponent,
      CommandesComponent,
      DashboardComponent
    }
  }
  </script>
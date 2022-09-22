<template>
    <div class="commandes">
        <CommandesComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CommandesComponent from '@/components/CommandesComponent/CommandesComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      CommandesComponent,
      DashboardComponent
    }
  }
  </script>
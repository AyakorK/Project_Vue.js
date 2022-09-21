<template>
    <div class="profil">
        <ProfilComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ProfilComponent from '@/components/ProfilComponent/ProfilComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      ProfilComponent,
      DashboardComponent
    }
  }
  </script>
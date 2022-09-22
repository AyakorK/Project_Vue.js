<template>
    <div class="profil">
        <SideBarComponent/>
        <ProfilComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue';
  import ProfilComponent from '@/components/ProfilComponent/ProfilComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      SideBarComponent,
      ProfilComponent,
      DashboardComponent
    }
  }
  </script>
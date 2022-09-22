<template>
    <div class="profil">
        <SideBarComponent/>
        <ProfilComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue';
  import ProfilComponent from '@/components/ProfilComponent/ProfilComponent.vue'
  
  export default {
    components: {
      SideBarComponent,
      ProfilComponent
    }
  }
  </script>
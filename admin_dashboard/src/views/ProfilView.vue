<template>
    <div class="profil">
        <HeaderComponent/>
        <SideBarComponent/>
        <ProfilComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue';
  import ProfilComponent from '@/components/ProfilComponent/ProfilComponent.vue'
  
  export default {
    components: {
      HeaderComponent,
      SideBarComponent,
      ProfilComponent
    }
  }
  </script>
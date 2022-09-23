<template>
    <SideBarComponent/>
    <headerComponent></headerComponent>
    <PaginationComponent/>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import PaginationComponent from '@/components/PaginationComponent/PaginationComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  
  
  export default {
    name: 'HomeView',
    components: {
      PaginationComponent,
      HeaderComponent,
      SideBarComponent
    }
  }
  </script>
  
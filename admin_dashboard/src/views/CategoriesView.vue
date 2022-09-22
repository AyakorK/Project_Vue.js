<template>
    <div class="categories">
        <SideBarComponent/>
        <CategoriesComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      SideBarComponent,
      CategoriesComponent,
      DashboardComponent
    }
  }
  </script>
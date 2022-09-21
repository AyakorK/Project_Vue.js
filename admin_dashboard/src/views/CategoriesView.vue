<template>
    <div class="categories">
        <CategoriesComponent/>
        <DashboardComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent.vue'
  import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
  
  export default {
    components: {
      CategoriesComponent,
      DashboardComponent
    }
  }
  </script>
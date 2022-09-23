<template>
    <div class="categories">
        <SideBarComponent/>
        <CategoriesComponent/>

     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent.vue'

  
  export default {
    components: {
      SideBarComponent,
      CategoriesComponent,

    }
  }
  </script>
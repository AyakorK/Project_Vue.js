<template>
    <div class="store">
      <StoreComponent msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import StoreComponent from '@/components/StoreComponent/StoreComponent.vue'
  
  export default {
    name: 'StoreView',
    components: {
      StoreComponent
    }
  }
  </script>
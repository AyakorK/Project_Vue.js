<template>
    <headerComponent></headerComponent>

    <div class="store">
      <CartComponent />
      <SideBarComponent/>
      
      <StoreComponent/>
      <DashboardComponent/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import StoreComponent from '@/components/StoreComponent/StoreComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
  import CartComponent from '@/components/CartComponent/CartComponent.vue'

  export default {
    name: 'StoreView',
    components: {
      SideBarComponent,
      StoreComponent,
      HeaderComponent,
      CartComponent

    }
  }
  </script>
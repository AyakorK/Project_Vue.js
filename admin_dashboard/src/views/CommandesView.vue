<template>
    <div class="commandes">
      <CartComponent />
        <SideBarComponent/>
        <CommandesComponent/>
     </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
  import CommandesComponent from '@/components/CommandesComponent/CommandesComponent.vue'
  
  export default {
    components: {
      SideBarComponent,
      CommandesComponent,
    }
  }
  </script>
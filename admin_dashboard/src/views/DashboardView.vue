<template>
  <headerComponent></headerComponent>
  <div class="dashboard">
    <SideBarComponent/>
    <DashboardComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    SideBarComponent,
    DashboardComponent,
    HeaderComponent
  }
}
</script>
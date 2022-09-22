<template>
  <div class="dashboard">
    <SideBarComponent/>
    <DashboardComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    SideBarComponent,
    DashboardComponent,
}
}
</script>
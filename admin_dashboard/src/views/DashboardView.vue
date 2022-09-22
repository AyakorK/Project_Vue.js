<template>
  <headerComponent></headerComponent>
  <div class="dashboard">
    <DashboardComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    DashboardComponent,
    HeaderComponent
  }
}
</script>
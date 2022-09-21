<template>
  <div class="dashboard">
    <DashboardComponent msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue'

export default {
  name: 'DashboardView',
  components: {
    DashboardComponent
  }
}
</script>
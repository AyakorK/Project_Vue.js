<template>
  <SideBarComponent/>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
import HelloWorld from '@/components/HomeComponent/HomeComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SideBarComponent
  }
}
</script>

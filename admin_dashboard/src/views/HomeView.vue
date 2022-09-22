<template>
  <CartComponent />
  <SideBarComponent/>

  <headerComponent>
  </headerComponent>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBarComponent from '@/components/SideBarComponent/SideBarComponent.vue'
import HelloWorld from '@/components/HomeComponent/HomeComponent.vue'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import CartComponent from '@/components/CartComponent/CartComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeaderComponent,
    SideBarComponent,
    CartComponent
  }
}
</script>

<template src="./ProfilComponent.html" lang="html"></template>
  
  <script>
    import { useProductStore } from '../../stores/Store.js';
    import {mapStores , mapState} from 'pinia';
  export default {
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['user']),
    },
    beforeMount(){
      this.ProductStoreStore.fetchUser(sessionStorage.getItem('token'))
    },
    beforeUpdate(){
      if (this.user.length == 0){
        this.$router.push('/login')
      }
    },
    data() {
      return {
        image: 'admin_dashboard/src/assets/profilePic.png',
      }
    },
    methods: {
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->

  <style scoped>
  
  </style>

 
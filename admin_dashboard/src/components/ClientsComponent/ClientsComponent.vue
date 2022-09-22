<template src="./ClientsComponent.html" lang="html"></template>
  
  <script>
      import { useProductStore } from '../../stores/Store.js';
      import {mapStores , mapState} from 'pinia';

  export default {

    computed:{

      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['users'] ),
    },

    beforeMount(){
      this.ProductStoreStore.fetchUsers()
    },

    methods:{
  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  

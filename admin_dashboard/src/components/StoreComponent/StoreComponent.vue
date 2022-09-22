<template src="./StoreComponent.html">
    
  </template>
  
  <script>

  import { useProductStore } from '../../stores/Store.js';
  import {mapStores , mapState} from 'pinia';

  export default {
    
    name: 'HelloWorld',
    computed:{

      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['category' ,'products'] ),

     
    },
    beforeMount(){
        this.ProductStoreStore.fetchCategory()
        // this.ProductStoreStore.fetchProducts()
      },

    methods:{
      showProducts(productsId){
        this.ProductStoreStore.fetchProductsWithId(productsId)
      }
    }
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
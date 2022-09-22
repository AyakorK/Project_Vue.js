<template src="./StoreComponent.html">
    
  </template>
  
  <script>

  import { useProductStore } from '../../stores/Store.js';
  import {mapStores , mapState} from 'pinia';

  export default {
    
    name: 'HelloWorld',
    data() {
      return {
        cart: [],
        totalPrice: 0,
      }
    },
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
        this.allProducts = this.ProductStoreStore.products
      },
      addToCart(id){
        // If id already exists in the cart increase his quantity by one
        if(this.cart.some(item => item.id === id)){
          this.cart.forEach(item => {
            if(item.id === id){
              item.quantity++
            }
          })
        }else{
          // If id doesn't exist in the cart add it to the cart
          this.cart.push({
            id: id,
            quantity: 1
          })
        }
        // Calculate the total price
        this.totalPrice += this.ProductStoreStore.products.find(item => item.id === id).price
      },
    }
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
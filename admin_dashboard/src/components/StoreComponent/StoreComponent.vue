<template src="./StoreComponent.html">
    
  </template>
  
  <script>

  import { useProductStore } from '../../stores/Store.js';
  import {mapStores , mapState} from 'pinia';
  import axios from 'axios'

  export default {
    
    name: 'HelloWorld',
    data() {
      return {
        cart: [],
        totalPrice: 0,
        selectedCart: 0,
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
      addToCart(id, name, price){
        // If id already exists in the cart increase his quantity by one
        if(this.cart.some(item => item.id === id)){
          this.cart.forEach(item => {
            if(item.id === id){
              item.quantity++
              console.log(item.quantity)
            }
          })
        }else{
          // If id doesn't exist in the cart add it to the cart
          this.cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
          })
        }
        // Calculate the total price
        this.totalPrice += this.ProductStoreStore.products.find(item => item.id === id).price
      },

      displayProduct() {
        console.log("add")
        const ProductID = this.cart[this.selectedCart].id;
        console.log("id : " + this.cart[this.selectedCart].id)
        axios.get("http://10.57.29.211:3000/products/" + ProductID)
          .then(response => {
            console.log(response)

            this.products.id = response.data.id,
            this.products.name = response.data.name
            this.products.quantity = response.data.quantity
            this.products.category = response.data.category
            this.products.price = response.data.price


            console.log("add")
          }).catch(error => {
            console.log(error.response.data)
          })
      },

      updateCart(index) {
          this.selectedCart = index;
      },
    }
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
<template src="./StoreComponent.html">
    
  </template>
  
  <script>

  import { useProductStore } from '../../stores/Store.js';
  import {mapStores , mapState} from 'pinia';
  import axios from 'axios'

  let productName = [];

  export default {
    
    
    name: 'HelloWorld',
    data() {
      return {
        cart: [],
        totalPrice: 0,
        selectedCart: 0,
        selectedCategory: 0,
        selectCategoryName: "Select a category to filter",
      }
    },
    computed:{
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['category' ,'products', 'user'] ),

      //Create a function that sort the array given
      sortArray: function () {
        productName = this.products;
        return productName.sort((a, b) => a.name.localeCompare(b.name));
      },
    },
    
    beforeMount(){
        this.ProductStoreStore.fetchCategory()
        this.ProductStoreStore.fetchProducts()
        this.ProductStoreStore.fetchUser(sessionStorage.getItem('token'))
        if (localStorage.getItem('cart') != null) {
          this.cart = JSON.parse(localStorage.getItem('cart'))
          this.totalPrice = Object.values(this.cart).reduce((a, b) => a + b.price*b.quantity, 0)
        }
      },


    methods:{
      showProducts(productsId){
        // console.log(this.products[this.selectedCategory].id)
        this.ProductStoreStore.fetchProductsWithId(productsId)
        this.allProducts = this.ProductStoreStore.products
        this.selectCategoryName = this.category[productsId - 1].title
      },
      addToCart(id, name, price){
        if (this.user.length == 0) {
          // Redirect to login page
          window.location.href = "/login";
        }
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
        console.log(this.cart)
        // Stock this cart in the local storage
        localStorage.setItem('cart', JSON.stringify(this.cart))

        // Calculate the total price
        this.totalPrice += this.ProductStoreStore.products.find(item => item.id === id).price
      },
      displayProduct() {
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

      updateCategory(index) {
        this.selectedCategory = index
      },

      updateCart(index) {
          this.selectedCart = index;
      },

      buyCart() {
        // Get the infos of the user
        
        const user = this.user[0]
        if (user.money > this.totalPrice && this.totalPrice > 0 && this.cart.length > 0) {
          axios.put(`http://10.57.29.211:3000/users/${user.id}`, {
            email: user.email,
            password: user.password,
            admin: user.admin,
            token: user.token,
            money: user.money - this.totalPrice
          })
          axios.post('http://10.57.29.211:3000/orders', {
            user_id: user.id,
            total_price: this.totalPrice,
            products: this.cart
          }).then(response => {
            console.log("This works " + response)
            this.cart = []
            localStorage.setItem('cart', JSON.stringify(this.cart))
            this.totalPrice = 0
            window.location.href = "/store";
          }).catch(error => {
            console.log(error.response.data)
          })
        } else if (user.money < this.totalPrice) {
          alert("You don't have enough money to buy this cart")
        } else if (this.totalPrice == 0) {
          alert("Your cart is empty")
        } else if (this.cart.length == 0) {
          alert("Your cart is empty")
        }
      }
    }
  }

  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
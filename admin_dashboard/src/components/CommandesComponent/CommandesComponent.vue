<template src="./CommandesComponent.html" lang="html"></template>
  
  <script>
  import { useProductStore } from '../../stores/Store.js';

  import axios from 'axios'

  import { mapStores, mapState } from 'pinia'
  export default {
    
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['orders', 'users', 'products', 'user']),
    },
    beforeMount() {
      this.ProductStoreStore.fetchOrders()
      this.ProductStoreStore.fetchUsers()
      this.ProductStoreStore.fetchProducts()
      this.ProductStoreStore.fetchUser(sessionStorage.getItem('token'))
    },
    beforeUpdate() {
      if (this.user.length == 0){
        this.$router.push('/login')
      } else if (this.user[0].admin == 0) {
        this.$router.push('/profile')
      }
    },
    methods: {
      deleteOrder(OrderID) {
        // Give back the money to the user with a put axios
        let order = this.orders.find(order => order.id == OrderID)
        let user = this.users.find(user => user.id == order.user_id)
        
        // For each product in the order
        order.products.forEach(item => {
          // Find the product in the products array
          let product = this.products.find(productInArray => productInArray.id == item.id)
          // Add the quantity of the product in the order to the quantity of the product in the products array
          product.quantity += item.quantity
          // Update the product in the products array
          axios.put(`http://${process.env.API_URL}/products/` + product.id, {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            category_id: product.category,
          })
        })

        axios.put(`http://${process.env.API_URL}/users/` + user.id, {
          email: user.email,
          password: user.password,
          admin: user.admin,
          token: user.token,
          money: user.money + order.total_price
        })

        axios.delete(`http://${process.env.API_URL}/orders/` + OrderID)
          .then(() => {
            this.orders.splice(OrderID, 1);  
          });
      
      window.location.reload();
          
      },
      displayOrder(OrderID) {
        axios.get(`http://${process.env.API_URL}/orders/` + OrderID)
          .then(response => {
            console.log(response)

            this.orders.id = response.data.id,
            this.orders.user_id = response.data.user_id,
            this.orders.products = response.data.products,
            this.orders.total_price = response.data.total_price
          }).catch(error => {
            console.log(error.response.data)
          })
      },
      updateOrder(orderID) {
      let order = this.orders.find(order => order.id == orderID)
      let products = this.orders.products
      let user = this.users.find(user => user.id == this.orders.user_id)

  
      console.log(products)
      console.log(user)
      

      order.products.forEach(item => {
        console.log(item)
        console.log(item.id)
          // Find the product in the products array
          let product = this.products.find(productInArray => productInArray.id == item.id)
          // Add the quantity of the product in the order to the quantity of the product in the products array
          let previousProduct = this.orders.products.find(productInArray => productInArray.id == item.id)
          console.log(product)
          console.log(previousProduct.quantity)
          console.log(product.quantity)
          console.log(item.quantity)
          product.quantity =  product.quantity + item.quantity - previousProduct.quantity
          console.log(product.quantity)
          // Update the product in the products array
          axios.put(`http://${process.env.API_URL}/products/` + product.id, {
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            category: product.category,
          })
        })
      
    
      for (let i = 0; i < products.length; i++) {
        products[i].quantity = parseInt(products[i].quantity)
      }
      let total_price = 0
      for (let i = 0; i < products.length; i++) {
        let product = this.products.find(product => product.id == products[i].id)
        total_price += product.price * products[i].quantity
      }

      if (user.money + parseInt(this.orders.total_price) - parseInt(total_price) > 0) {
      axios.put(`http://${process.env.API_URL}/users/` + user.id, {
        email: user.email,
        password: user.password,
        admin: user.admin,
        token: user.token,
        money: user.money + parseInt(this.orders.total_price) - parseInt(total_price)
      })

      
      axios.put(`http://${process.env.API_URL}/orders/` + orderID, {
        user_id: this.orders.user_id,
        products: this.orders.products,
        total_price: total_price,
      })
      window.location.reload();
      } else {
        alert("Not enough money")
      }
      }

    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
<template src="./DashboardComponent.html" ></template>
  
<script>
  import { useProductStore } from '../../stores/Store.js';

  import axios from 'axios'

  import { mapStores, mapState } from 'pinia'

  export default {
    data() {
      return {
        msg: "-- Dashboard --",
        newProductName: "",
        newProductQuantity: "",
        newProductCategory: "",
        newProductPrice: "",
        table: "",
        selectCategoryName: "Select a category",
      }
    },
    
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['category', 'products', 'user' ]),
    },
    beforeMount() {
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
      
      addProduct() {
        axios.post(`http://${process.env.API_URL}/products`, {

              id: this.products.slice(-1)[0].id + 1,
              name: this.newProductName,
              quantity: this.newProductQuantity,
              category: this.newProductCategory,
              price: this.newProductPrice,

            })
              .then(function (response) {
                console.log(response)
                // location.reload();
              })
              .catch(function (error) {
                console.log(error);
            });
            // location.reload();
            
      },

      deleteProduct(ProductID) {
        console.log("delete")
        axios.delete(`http://${process.env.API_URL}/products/` + ProductID)
          .then(() => {
            this.products.splice(ProductID, 1);
            // console.log(this.products);
            location.reload();
          });
      },

      displayProduct(ProductID) {
        axios.get(`http://${process.env.API_URL}/products/` + ProductID)
          .then(response => {
            console.log(response)

            this.products.id = response.data.id,
            this.products.name = response.data.name
            this.products.quantity = response.data.quantity
            this.products.category = response.data.category
            this.products.price = response.data.price

          }).catch(error => {
            console.log(error.response.data)
          })
      },

      updateProduct(ProductID) {
        console.log("update")
        console.log(ProductID)
        axios.put(`http://${process.env.API_URL}/products/` + ProductID, {
          name: this.products.name,
          quantity: this.products.quantity,
          category: this.products.category,
          price: this.products.price,
        })
        .then(() => {

            // console.log(this.products);
            location.reload();
          });

      },
    },
    
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  
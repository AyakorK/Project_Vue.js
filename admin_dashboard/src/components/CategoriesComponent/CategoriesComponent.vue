<template src="./CategoriesComponent.html" lang="html"></template>

<script>
  import { useProductStore } from '../../stores/Store.js';
  import { mapStores, mapState } from 'pinia'
  import axios from 'axios'

  export default {
    data() {
      return {
        msg: "-- Categories --",
        children: [],
        newCategoryName: ""
      }
    },
    
    // Take the Pania Store
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['category' ,'products'] ),
      
    },
    beforeMount() {
      this.ProductStoreStore.fetchCategory()
    },
    methods: {
      //Function to show children of each category
      showChildren(productsId){
        this.ProductStoreStore.fetchProductsWithId(productsId)
        this.allProducts = this.ProductStoreStore.products
      },
      //Function to add a category to the API
      addCategory() {
        axios.post(`http://${process.env.API_URL}/categories`, {

          id: this.category.slice(-1)[0].id + 1,
          title: this.newCategoryName,

        })
          .then(function (response) {
            console.log(response)
            location.reload();
          })
          .catch(function (error) {
            console.log(error);
        });    
        },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->

  <style scoped>
 
  </style>


 
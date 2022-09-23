<template src="./CategoriesComponent.html" lang="html"></template>

<script>
  import { useProductStore } from '../../stores/Store.js';
  import { mapStores, mapState } from 'pinia'
  import axios from 'axios'

  export default {
    data() {
      return {
        msg: "-- Category --",
        children: [],
        newCategoryName: ""
      }
    },
    
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['category' ,'products'] ),
      
    },
    beforeMount() {
      this.ProductStoreStore.fetchCategory()
    },
    methods: {
      
      showChildren(productsId){
        this.ProductStoreStore.fetchProductsWithId(productsId)
        this.allProducts = this.ProductStoreStore.products

      },

      addCategory() {
        axios.post('http://10.57.29.211:3000/categories', {

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
            // location.reload();
            
      },
      
    },
    
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->

  <style scoped>
 
  </style>


 
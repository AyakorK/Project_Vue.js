<template src="./DashboardComponent.html" ></template>
  
<script>
  import { useProductStore } from '../../stores/Store.js';
  import { onBeforeMount } from 'vue';
  import axios from 'axios'

  import { mapStores, mapState } from 'pinia'

  export default {
    data() {
      return {
        msg: "-- Dashboard --",
        newProductName: "",
        newProductColor: "",
        newProductCategory: "",
        newProductPrice: "",
        table: "",
      }
    },
    // setup(){
    //   const useStore = useProductStore()
    //   const products = useStore.products;

    //   onBeforeMount(() => {
    //     useStore.fetchProducts()
    //   })

    //   return {
    //     products,
    //     useStore
    //   }
    // },
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['products'])
    },
    beforeMount() {
      this.ProductStoreStore.fetchProducts()
    },
    methods: {
      updateBoard() {
        const useStore = useProductStore()
      const products = useStore.products;

      onBeforeMount(() => {
        useStore.fetchProducts()
      })

      
        this.products = products
      },
      addProduct() {
        axios.post('http://10.57.29.211:3000/products', {

              id: this.products.slice(-1)[0].id + 1,
              name: this.newProductName,
              quantity: this.newProductQuantity,
              category: this.newProductCategory,
              price: this.newProductPrice,

            })
              .then(function (response) {
                console.log(response)
                if (response.status == 201) {

                  console.log("test")

                  this.newProductName = '';
                  this.newProductColor = '';
                  this.newProductCategory = '';
                  this.newProductPrice = '';

                  this.$router.push({ name: 'store' });

                } else {
                  alert("Register failed");
                }

              })
              .catch(function (error) {
                console.log(error);
            });
            this.updateBoard()
            
      },
      deleteProduct(ProductID) {
        axios.delete("http://10.57.29.211:3000/products/" + ProductID)
          .then(() => {
            this.products.splice(ProductID, 1);
            // console.log(this.products);
          });
          console.log("delete")
          this.updateBoard()
      },
    },
    
  }
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  
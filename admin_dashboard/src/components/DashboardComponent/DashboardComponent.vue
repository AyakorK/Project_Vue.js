<template src="./DashboardComponent.html"></template>

<script>
import { useProductStore } from "../../stores/Store.js";

import axios from "axios";

import { mapStores, mapState } from "pinia";

export default {
  data() {
    return {
      msg: "-- Dashboard --",
      newProductName: "",
      newProductQuantity: "",
      newProductCategory: "",
      newProductPrice: "",
      table: "",
      pages: 0,
      currentPage: 1,
      allProducts: [],
    };
  },

  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["products"]),
  },
  beforeMount() {
    this.ProductStoreStore.fetchProducts();
    
    this.allProducts = this.products;
    this.products = this.products.slice((this.currentPage - 1) * 10, this.currentPage * 10);
    this.pages = Math.ceil(this.allProducts.length / 10);
  },
  methods: {
    addProduct() {
      axios
        .post("http://10.57.29.211:3000/products", {
          id: this.products.slice(-1)[0].id + 1,
          name: this.newProductName,
          quantity: this.newProductQuantity,
          category: this.newProductCategory,
          price: this.newProductPrice,
        })
        .then(function (response) {
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
      // location.reload();
    },

    deleteProduct(ProductID) {
      console.log("delete");
      axios
        .delete("http://10.57.29.211:3000/products/" + ProductID)
        .then(() => {
          this.products.splice(ProductID, 1);
          // console.log(this.products);
          location.reload();
        });
    },

    displayProduct(ProductID) {
      axios
        .get("http://10.57.29.211:3000/products/" + ProductID)
        .then((response) => {
          (this.products.id = response.data.id),
            (this.products.name = response.data.name);
          this.products.quantity = response.data.quantity;
          this.products.category = response.data.category;
          this.products.price = response.data.price;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },

    updateProduct(ProductID) {
      console.log("update");
      console.log(ProductID);
      axios
        .put("http://10.57.29.211:3000/products/" + ProductID, {
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
    async changePage(page) {
      this.currentPage = page;
      
      // Load this.product and wait the end of the proxy
      await this.ProductStoreStore.fetchProducts();
      this.products = this.allProducts.slice((this.currentPage - 1) * 10, this.currentPage * 10);

      console.log(this.products);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

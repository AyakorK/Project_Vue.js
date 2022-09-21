<template src="./DashboardComponent.html" ></template>
  
  <script>
  export default {
    data() {
      return {
        msg: "-- Dashboard --",
        products: [
          {
            id: 1,
            name: "Apple MacBook Pro 17",
            color: "Silver",
            category: "Laptop",
            price: 2999,
          },
          {
            id: 2,
            name: "Microsoft Surface Pro	",
            color: "White",
            category: "Laptop PC",
            price: 1999,
          },
          {
            id: 3,
            name: "Magic Mouse 2",
            color: "Black",
            category: "Accessories",
            price: 99,
          },
          {
            id: 4,
            name: "Google Pixel Phone",
            color: "Gray",
            category: "Phone",
            price: 999,
          },
        ],
        newProductName: "",
        newProductColor: "",
        newProductCategory: "",
        newProductPrice: "",
      }
    },
    methods: {
      addProduct() {
        // if (this.newProductName && this.newProductColor && this.newProductCategory && this.newProductPrice) {

          this.products.push({
            id: this.products.slice(-1)[0].id + 1,
            name: this.newProductName,
            color: this.newProductColor,
            category: this.newProductCategory,
            price: this.newProductPrice,
          });
          console.log(this.products)
          
          this.newProductName = '';
          this.newProductColor = '';
          this.newProductCategory = '';
          this.newProductPrice = '';
          
        // }
      },
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  
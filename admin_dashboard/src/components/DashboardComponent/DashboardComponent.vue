<template src="./DashboardComponent.html" ></template>
  
  <script>
  export default {
    

    // Afficher div quand on clique sur <a>
    data() {
      return {
        show: false
      };
    },
    methods: {
      toggle() {
        this.show = !this.show;
        console.log("toggle");
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  
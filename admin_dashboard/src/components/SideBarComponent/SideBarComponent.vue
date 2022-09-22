<template src="./SideBarComponent.html" lang="html"></template>
  
  <script>
  export default {
      methods: {
        isAuthenticated() {
          if (sessionStorage.getItem('token') != null) {
            return true;
          } else {
            return false;
          }
        },
        logout() {
          sessionStorage.removeItem('token');
          window.location.href = "/";
        }
      }
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  .dashboardgreen {
        color: #42b983;
  }
  </style>
  
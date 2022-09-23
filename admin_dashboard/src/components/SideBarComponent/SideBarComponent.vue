<template src="./SideBarComponent.html" lang="html"></template>
  
  <script>
  import { useProductStore } from '../../stores/Store.js';
  import { mapStores, mapState } from 'pinia'
  export default {
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['user']),
    },
    beforeMount() {
      this.ProductStoreStore.fetchUser(sessionStorage.getItem('token'))
    },
      methods: {
        isAuthenticated() {
          if (sessionStorage.getItem('token') != null) {
            return true;
          } else {
            return false;
          }
        },
        isAdmin() {
          if (this.user.length != 0) {
            if (this.user[0].admin == 1) {
              return true;
            } else {
              return false;
            }
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
  
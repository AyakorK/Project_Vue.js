<template src="./ProfilComponent.html" lang="html"></template>
  
  <script>
    import { useProductStore } from '../../stores/Store.js';
    import {mapStores , mapState} from 'pinia';
  export default {
    computed: {
      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['users'] ),
    },
    beforeMount(){
      this.ProductStoreStore.fetchUsers()
      this.getName()
    },
    data() {
      return {
        image: 'admin_dashboard/src/assets/profilePic.png',
      }
    },
    methods: {
      getName: function() {
        // Get token in the sessionStorage
        let token = sessionStorage.getItem('token')
        this.ProductStoreStore.users.filter(user => {
          if(user.token === token){
            this.email = user.email
          }
          console.log(this.email)
        })
      },
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->

  <style scoped>
  
  </style>

 
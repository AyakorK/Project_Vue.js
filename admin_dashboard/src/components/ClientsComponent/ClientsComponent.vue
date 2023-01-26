<template src="./ClientsComponent.html" lang="html"></template>
  
  <script>
      import { useProductStore } from '../../stores/Store.js';
      import {mapStores , mapState} from 'pinia';
      import axios from 'axios';

  export default {

    computed:{

      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['users', 'user'] ),
    },

    beforeMount(){
      this.ProductStoreStore.fetchUsers()
      this.ProductStoreStore.fetchUser(sessionStorage.getItem('token'))
    },

    

    beforeUpdate(){
      if (this.user.length == 0){
        this.$router.push('/login')
      } else if (this.user[0].admin == 0) {
        this.$router.push('/profile')
      }
    },

    methods:{

    prev() {
      if (this.ProductStoreStore.page > 1) {
        this.ProductStoreStore.decrement();
      }
    },
    next() {
      if (this.ProductStoreStore.users.length == 5) {
        this.ProductStoreStore.increment();
      }
    },

    deleteProduct(usersID) {
      console.log("delete")
      axios.delete(`http://${process.env.API_URL}/users/` + usersID)
        .then(() => {
          this.products.splice(usersID, 1);
          // console.log(this.products);
          location.reload();
        });
    },
  }
}
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
  

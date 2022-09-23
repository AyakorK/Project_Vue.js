<template src="./ClientsComponent.html" lang="html"></template>
  
  <script>
      import { useProductStore } from '../../stores/Store.js';
      import {mapStores , mapState} from 'pinia';
      import axios from 'axios';

  export default {

    computed:{

      ...mapStores(useProductStore),
      ...mapState(useProductStore, ['users'] ),
    },

    beforeMount(){
      this.ProductStoreStore.fetchUsers()
    },

    methods:{

    deleteProduct(usersID) {
      console.log("delete")
      axios.delete("http://10.57.29.211:3000/users/" + usersID)
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
  

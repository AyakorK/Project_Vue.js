<template>
    <h1>Store</h1>
  <ul>
    <li v-for="(item, index) in characters" :key="index">
      <a :href="item.url">{{ item.name }}</a>
    </li>
  </ul>
  </template>
  
  <script>

  import { useProductStore } from '../stores/Store.js';
  import { onBeforeMount } from 'vue';

  export default {
    setup(){
      const useStore = useProductStore()
      const characters = useStore.characters;

      onBeforeMount(() => {
        useStore.fetchProducts()
      })

      return {
        characters,
        useStore
      }
    },
    
    name: 'HelloWorld',
    computed:{
    },
    methods:{
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
  
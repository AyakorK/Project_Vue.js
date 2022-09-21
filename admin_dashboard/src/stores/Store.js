import { defineStore } from 'pinia';

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            characters: [],
            page: 1,
        };  
    },
    actions: {
        async fetchProducts() {
            const res = await fetch('http://10.57.29.211:3000/products')
            const data = await res.json()
            console.log(data)
            this.characters = data
          },
    },    
});

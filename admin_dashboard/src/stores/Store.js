import { defineStore } from 'pinia';

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [],
            category: [],
            users: [],
        };
    },
    actions: {
        async fetchProducts() {
            const res = await fetch('http://10.57.29.211:3000/products')
            const data = await res.json()
            this.products = data
        },
        async fetchCategory() {
            const res = await fetch('http://10.57.29.211:3000/categories')
            const data = await res.json()
            this.category = data
        },
        async fetchProductsWithId(productsId) {
            const res = await fetch('http://10.57.29.211:3000/products?category=' + productsId)
            const data = await res.json()
            this.products = data
        },
        async fetchUsers() {
            const res = await fetch('http://10.57.29.211:3000/users')
            const data = await res.json()
            this.users = data
        }
    },
});
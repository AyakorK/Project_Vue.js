import { defineStore } from 'pinia';

export let useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [],
            category: [],
            users: [],
            user: [],
            orders: [],
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
        },
        async fetchUser(token) {
            const res = await fetch('http://10.57.29.211:3000/users?token=' + token)
            const data = await res.json()
            this.user = data
        },
        async fetchOrders() {
            const res = await fetch('http://10.57.29.211:3000/orders')
            const data = await res.json()
            this.orders = data
        }
    },
});
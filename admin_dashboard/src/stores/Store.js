import { defineStore } from 'pinia';

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [],
            category: [],
            users: [],
            user: [],
            orders: [],
            totalItems: 0,
            page: 1,
        };
    },
    actions: {
        async fetchProducts() {
            const res = await fetch('http://10.10.20.110/products')
            const data = await res.json()
            this.products = data
        },
        async fetchCategory() {
            const res = await fetch('http://10.10.20.110/categories')
            const data = await res.json()
            this.category = data
        },
        async fetchProductsWithId(productsId) {
            const res = await fetch('http://10.10.20.110/products?category=' + productsId)
            const data = await res.json()
            this.products = data
        },
        async fetchUsers() {
            const res = await fetch('http://10.10.20.110/users?_page=' + this.page +"&_limit=5")
            const data = await res.json()
            this.users = data
            this.totalUser = res.headers.get('X-Total-Count')
            this.totalPage = Math.ceil(this.totalUser / 5)
            console.log(this.totalUser)
        },
        increment(){
            this.page++
            this.fetchUsers()
        },

        decrement(){
            this.page--
            this.fetchUsers()
        },
    

        async fetchUser(token) {
            const res = await fetch('http://10.10.20.110/users?token=' + token)
            const data = await res.json()
            this.user = data
        },
        async fetchOrders() {
            const res = await fetch('http://10.10.20.110/orders')
            const data = await res.json()
            this.orders = data
        }


    },
});
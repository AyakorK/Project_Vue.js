<template src="./LoginComponent.html" ></template>

<script>
  import axios from 'axios';
    export default {
      name: 'HelloWorld',
      email: "",
      password: "",
      props: {
        msg: String
      },
      beforeMount(){
        if(sessionStorage.getItem('token') != null){
          this.$router.push('/profile')
        }
      },
      methods: {
        login: function () {
         // If there is no field that are empty
          if (this.email != undefined && this.password != undefined) {

            axios.get(`http://${process.env.API_URL}/users`, {
                params: {
                    email: this.email,
                    password: this.password
                }
                })
                .then(function (response) {
                    if (response.data.length > 0) {
                        // Add a random token to sessionStorage
                        sessionStorage.setItem('token', response.data[0].token);
                        // redirect to shopping page
                        this.$router.push('/')
                    } else {
                    alert("Login failed");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
          }
        }
      }
    }
    
    </script>
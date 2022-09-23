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
          window.location.href = "/profile";
        }
      },
      methods: {
        login: function () {
         // If there is no field that are empty
          if (this.email != undefined && this.password != undefined) {

            axios.get('http://10.57.29.211:3000/users', {
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
                        window.location.href = "/store";
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
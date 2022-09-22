<template src="./RegisterComponent.html" ></template>

<script>
  import axios from 'axios';
    export default {
      name: 'HelloWorld',
      email: "",
      password: "",
      props: {
        msg: String
      },
      methods: {
        register: function () {
         // If there is no field that are empty
          if (this.email != undefined && this.password != undefined && this.password == this.confirm_password) {
            // Send the data to the server
            axios.post('http://10.57.29.211:3000/users', {
              email: this.email,
              password: this.password,
              money: 100,
              token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            })
              .then(function (response) {
                console.log(response.status);
                if (response.status === 201) {
                  window.location.href = "http://localhost:8080/login";
                  
                } else {
                  alert("Register failed");
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
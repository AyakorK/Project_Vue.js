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
          //Create a regex to check if the email is valid
          var emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
          //Check if the email is valid

          if (this.email != undefined  &&  emailRegex.test(this.email) && this.password != undefined && this.password.length >= 8  && this.password == this.confirm_password) {
            // Send the data to the server
            // It will use the ENV BASE_URL/users
            axios.post(`http://${process.env.API_URL}/users`,{
              email: this.email,
              password: this.password,
              money: 100,
              token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            })
              .then(function (response) {
                console.log(response.status);
                if (response.status === 201) {
                  this.$router.push(`http://${process.env.BASE_URL}/login`);

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
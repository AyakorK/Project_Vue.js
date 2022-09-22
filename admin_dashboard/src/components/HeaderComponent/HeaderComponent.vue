<template src="./HeaderComponent.html" ></template>

<script>
    export default {
      name: 'HelloWorld',
      props: {
        msg: String
      },
      methods: {
        isAuthenticated() {
            console.log(sessionStorage.getItem('token'));
          if (sessionStorage.getItem('token') != null) {
            return true;
          } else {
            return false;
          }
        },
        logout() {
          sessionStorage.removeItem('token');
          window.location.href = "/";
        }
      }
    }
    </script>
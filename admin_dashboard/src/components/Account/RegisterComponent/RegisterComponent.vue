<template src="./RegisterComponent.html" ></template>

<script>
    export default {
      name: 'HelloWorld',
      email: "",
      password: "",
      props: {
        msg: String
      },
      methods: {
        register: function () {
          console.log("register");
          console.log(this.email);
          console.log(this.password);
          if (this.confirm_password == this.password) {
            this.$http.post('http://10.57.29.211:3000/users', {
              email: this.email,
              password: this.password
            }).then(response => {
              console.log(response);
            }, response => {
              console.log(response);
            });
          } else {
            console.log("passwords do not match");
          }
        }
      }
    }
    // Import admin_dashboard/src/assets/index.css
    import '@/assets/index.css'
    
    </script>
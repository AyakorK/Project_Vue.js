<template src="./HomeComponent.html" ></template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    isAuthenticated() {
      if (sessionStorage.getItem('token') != null) {
        return true;
      } else {
        return false;
      }
    },
    getUsers() {
      axios.get(`http://${process.env.API_URL}/users`)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .crocodile {
    height: fit-content;
  }

</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-item" to="/home-index">home</router-link>
      <router-link class="nav-item" to="/login">login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.nav-item{
  padding:10px;
}
</style>

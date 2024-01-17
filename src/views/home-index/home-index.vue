<template>
  <div @click="jump">
    首页
    <div style="width: 100px;height: 100px;background-color: #42b983">
      <router-link class="item" to="/css-demo">css-demo</router-link>
    </div>

  </div>
</template>

<script>
export default {
  components: {

  },

  data() {
    return {

    }
  },

  methods: {
    jump() {
      console.log('jump')
      // window.location.href = '/css-demo/border-rotate/border-rotate.vue'
    }
  },

  created() {

  }
};
</script>

<style scoped>
  @import "home-index.styl";
</style>
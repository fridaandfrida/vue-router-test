<template>
  <div class="hello">
    <p>
      apple
      <router-view></router-view>
      <span>fen</span>
      <!-- <router-view></router-view> -->
      <router-view name="helper"></router-view>
    </p>
  </div>
</template>

<script>
export default {
  name: 'apple',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

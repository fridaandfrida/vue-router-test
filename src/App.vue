<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <router-view></router-view>  
     <router-link :to="'apple'"> to apple</router-link> 
     <router-link :to="{path:'/banana',query:{color:'yellow'}}">to banana</router-link>
    <router-link :to="{path:'apple/redapple'}">to applered</router-link>-->
    <!-- <router-link :to="'apple'"> to apple</router-link> -->
    <h1>Hello App!</h1>
    <!-- <router-view></router-view> -->

    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <!-- <router-link :to="'apple'"> to apple</router-link> -->
    <!-- <router-link to="/apple"> to apple</router-link> -->
    <!-- <router-link :to="apple">Go to apple</router-link> -->
    <!-- <router-link :to="{path:'/banana',query:{color:'yellow'}}">Go to banana{{$route.params.color}}</router-link>
        <router-link :to="{path:'apple/redapple'}">to applered</router-link>
        <p>{{ $route.params.color }}</p>
        <button @click="getparams">get params</button>
        <router-link to="/use:id"> to User</router-link>
    <div>User {{ $route.params.id }}</div>-->
    <div>
      <!-- <div>appleyayyaya {{$route.params.color}}</div>
      <router-view></router-view> -->
      <router-link to="/apple"> to apple</router-link>
      <router-view></router-view>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // name: 'app',
  // components: {
  //   HelloWorld
  // }
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    getparams() {
      console.log(this.$route.params);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

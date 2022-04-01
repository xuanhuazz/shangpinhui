<template>
  <div >
   <Header/>
   <router-view></router-view>
   <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{Header,Footer},
  mounted(){
    //发送dispatch请求三级联动列表，将请求放在APP中，请求只会实行一次
    this.$store.dispatch("categoryList");
  }
}
</script>

<style scoped>

</style>
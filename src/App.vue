<template>
  <el-container style="height:100%; border: 1px solid #eee">
    <Menu/>
    <el-container direction="vertical">
      <Header/>
      <el-container style="height:80%; border: 1px solid #eee">
        <ListBook/>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import Menu from './components/Menu.vue'
  import Header from './components/Header.vue'
  import ListBook from './components/ListBook.vue'

  export default {
    name: 'app',
    components: {
      Menu,Header,ListBook
    }
  }
</script>

<style>
  html,body{height:100%; margin:0;}
</style>

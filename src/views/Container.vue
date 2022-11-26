<template>
  <div class="Container">

    <el-container>
      <el-header>header</el-header>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>

      <el-footer>footer</el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  //components: {},

  //computed:{},

  //mounted () {},

  //methods: {},
};
</script>

<style scoped>
.el-container {
  background-color: #eee;
  color: white;
}
.el-header {
  background-color: skyblue;
  height: 100px !important;
}
.el-main {
  background-color: red;
  min-height: 350px;
}
.el-footer {
  background-color: pink;
}
.el-aside{
  background-color: blue;
  width: 300px !important;
  min-height: 350px;
}
</style>

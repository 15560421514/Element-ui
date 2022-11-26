<template>
  <div id="app">
    <nav>
      <router-link to="/Layout" tag="button" class="size">Layout布局</router-link> |
      <router-link to="/Container" tag="button" class="size">Container 布局容器</router-link> |
      <router-link to="/icon---link" tag="button" class="size">icon图标--link文字</router-link> |
      <router-link to="/Button" tag="button" class="size">Button 按钮</router-link> |
      <router-link to="/Radio--Checkbox" tag="button" class="size">Radio-Checkbox</router-link> |
      <router-link to="/Input" tag="button" class="size">Input 输入框</router-link> |
      <router-link to="/InputNumber" tag="button" class="size">InputNumber计数器</router-link> |
      <router-link to="/Select" tag="button" class="size">Select选择器</router-link> |
      <router-link to="/Cascader" tag="button" class="size">Cascader级联选择器</router-link> |
      <router-link to="/Switch" tag="button" class="size">Switch开关</router-link> |
      <router-link to="/Slider" tag="button" class="size">Slider滑块</router-link> |
      <router-link to="/TimePicker" tag="button" class="size">TimePicker时间选择器</router-link> |
      <router-link to="/Form" tag="button" class="size">Form表单</router-link> |
      <router-link to="/DatePicker " tag="button" class="size">DatePicker日期选择器</router-link> |
      <router-link to="/Upload " tag="button" class="size">Upload上传</router-link> |
      <router-link to="/Rate" tag="button" class="size">Rate评分</router-link> |
      <router-link to="/ColorPicker" tag="button" class="size">ColorPicker颜色选择器</router-link> |
      <router-link to="/Transfer" tag="button" class="size">Transfer穿梭框</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    button(){
      this.$router.push('/about')
    }
  },
}
</script>

<style>
body{
  background-color: rgb(209, 237, 214);
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

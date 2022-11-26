<template>
  <div>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="value2" :colors="colors"> </el-rate>
    </div>


    <el-button type="primary" @click="p" @change="c">测试</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "blue"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  methods: {
    p(e){
      console.log(this.value1,this.value2);
    },
    c(e){
      console.log(e);
    }
  },
};
</script>

<style scoped>
</style>
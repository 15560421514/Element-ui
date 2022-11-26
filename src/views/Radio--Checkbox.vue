<template>
  <div>
    <!-- <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio> -->

    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>

    <el-radio-group v-model="radio1" size="small" @input="input">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
    <button @click="o">555</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      radio: "1",
      radio1:''
    };
  },
  methods: {
    o() {
      console.log(this.radio);
    },
    input(e){
      console.log(e);
    }
  },
};
</script>

<style scoped>
</style>
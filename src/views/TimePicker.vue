<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-time-select
          v-model="value"
          :picker-options="{
            start: '08:00',
            step: '01:00',
            end: '18:00',
          }"
          placeholder="选择时间"
        >
        </el-time-select>
      </el-col>
      <el-col :span="6"> </el-col>
      <el-col :span="6"> </el-col>
      <el-col :span="6"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
</style>
<template>
  <div>

    <el-row>
      <el-col :span="24">24</el-col>
    </el-row>
  
    <el-row>
      <el-col :span="18">18</el-col>
    </el-row>

    <el-row :gutter="100">
      <el-col :span="6">
        <div style="background-color:sienna">6</div>
      </el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
      <el-col :span="6">6</el-col>
    </el-row>

    <el-row type="flex" justify="center">
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
      <el-col :span="4">4</el-col>
    </el-row>


    <el-row>
      <el-col :span="4" :offset="2">4</el-col>
      <el-col :span="4" :offset="4">4</el-col>
      <el-col :span="4" :offset="2">4</el-col>
    </el-row>




  </div>
</template>

<script>

export default {
  name: 'Layout',
}
</script>

<style scoped>
.size{
  font-size: 14px;
  width: 180px;
  height: 40px;
}
.size:hover{
  background-color: rgb(100, 197, 126);
}
  
  .el-row{
    background-color: rgb(27, 141, 97);
    margin: 20px 0;
  }
  .el-col{
    background-color: rgb(40, 63, 92);
    color: azure;
    padding: 10px 0;
    border-right: 1px solid white;
    box-sizing:border-box;
  }
</style>
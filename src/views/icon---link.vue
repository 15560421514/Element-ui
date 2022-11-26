<template>
  <div>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <hr>
    <div>
      <el-link type="success" :underline="false" icon="el-icon-edit ">编辑</el-link>
      <el-link disabled href="http://www.baidu.com">查看<i class="el-icon-view el-icon--right "></i> </el-link>
    </div>
  </div>
</template>

<style scoped>
.el-icon-edit {
  font-size: 90px;
  color: rgb(46, 137, 47);
}
.el-button {
  font-size: 100px;
  color: rgb(185, 118, 30);
}

.el-link{
  font-size: 30px;
}
</style>
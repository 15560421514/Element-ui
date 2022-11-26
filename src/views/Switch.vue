<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6"
        ><div>
          <el-switch
            inactive-text="guan"
            active-text="你哈"
            :width="200"
            v-model="value"
            active-color="red"
            inactive-color="pink"
          >
          </el-switch></div
      ></el-col>
      <el-col :span="6">
        <div>
          <el-switch
            active-value="100"
            inactive-value="0"
            v-model="value2"
            active-color="red"
            inactive-color="pink"
            @change="ff"
          >
          </el-switch>
        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <span @click="change">测试model值</span>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: true,
      value2: '100',
    };
  },

  methods: {
    change() {
      console.log(this.value2);
    },
    ff(e){
      console.log(e);
    }
  },

  //components: {},

  //computed:{},

  //mounted () {},
};
</script>

<style scoped>
</style>
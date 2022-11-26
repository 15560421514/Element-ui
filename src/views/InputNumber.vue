<template>
  <div>
    <el-row :gutter="1">
      <el-col :span="6">
        <div>
          <el-input-number controls-position="right" :precision="2" v-model="ff" @change="inputChange" :min="-6" :max="10" label="label" @focus="p"></el-input-number>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      ff:5
    };
  },
  methods: {
    inputChange(e,p){
      console.log(e,p);
    },
    p(e){
      console.log(e);
    }

  //components: {},

  //computed:{},

  //mounted () {},

  },
}
</script>

<style scoped>

</style>
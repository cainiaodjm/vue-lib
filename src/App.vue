<template>
  <div class="example-list">
    <div class="example">
      Button
      <el-button
        :plain="true"
        size="small"
        @click="handleClick"
      >
        测试按钮
      </el-button>
      <el-button
        :loading="true"
        size="large"
      >
        测试按钮
      </el-button>
      <el-button
        :loading="true"
        :round="true"
        size="large"
      >
        测试按钮
      </el-button>
      <el-button
        :disabled="true"
        size="small"
      >
        禁用按钮
      </el-button>
      <el-button
        :loading="true"
        size="small"
      >
        loading按钮
      </el-button>
      <el-button
        type="primary"
        size="small"
      >
        primary
      </el-button>
      <el-button
        type="danger"
        size="small"
      >
        primary
      </el-button>
      <el-button
        type="text"
        size="small"
      >
        primary
      </el-button>
    </div>
    <div class="example">
      //
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue",
    }
  },
  methods:{
    handleClick(e){
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  padding: 8px;
  border: 1px solid orange;
  @at-root{
    &+&{
        margin:16px 0px
    }
  }
 
}
</style>

<template>
  <div class="message">
    {{ message }}
     <el-button>测试按钮</el-button>
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
}
</script>

<style lang="scss" scoped>
.message {
  padding: 8px;
  border: 1px solid orange;
}
</style>

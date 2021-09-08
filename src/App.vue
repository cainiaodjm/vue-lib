<template>
  <div class="example-list">
    <div class="example">
      <div class="header" />
    </div>
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
      Collapse
      <ElCollapse v-model="activeNames">
        <el-collapse-item
          title="一致性 Consistency"
          name="1"
        >
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item
          title="反馈 Feedback"
          name="2"
        >
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item
          title="效率 Efficiency"
          name="3"
        >
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item
          title="可控 Controllability"
          name="4"
        >
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </ElCollapse>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue",
      activeNames:["1"]
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
<style lang="scss" scoped>
@mixin e($element){
  $B:'element-B';
  $E: $element !global;
  $selector: &;
  $currentSelector: "";
  $element-separator: '__';
  
  // .#{$element}{
  //   @content
  // }
  @each $unit in $element {
   $currentSelector: #{$currentSelector + "." + $B + $element-separator + $unit + ","};
  }
  @at-root {
      #{$currentSelector} {
        @content;
      }
  }
}


@include e(header){
 height: 100px;

}
</style>
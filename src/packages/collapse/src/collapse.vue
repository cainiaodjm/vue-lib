<template>
  <div
    class="el-collapse"
    role="tablist"
    aria-multiselectable="true"
  >
    <slot />
  </div>
</template>
<script>
export default {
    name:'ElCollapse',
    componentName:'ElCollapse',
    provide() {
      return {
        collapse: this
      };
    },
    props:{
        accordion: Boolean,
        value:{
            type:[String,Number,Array],
            default(){
             return []
            }
        }
    },
    data(){
        return {
            activeNames: [].concat(this.value)
        }
    },
    methods:{
        setActiveNames(activeNames){
            activeNames=[].concat(activeNames)
            let value = this.accordion ? activeNames[0]:activeNames
            this.activeNames = activeNames
            this.$emit('input',value)
            this.$emit('change',value)
        }
    }

}
</script>

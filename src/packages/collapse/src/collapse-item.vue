<template>
  <div
    class="el-collapse-item"
    :class="{'is-active':isActive,'is-disabled':disabled}"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`el-collapse-content-${id}`"
      :aria-describedby="`el-collapse-content-${id}`"
    >
      <div
        class="el-collapse-item__header"
        @click="handleHeaderClick"
      >
        <slot name="title">
          {{ title }}
        </slot>
        <i
          class="el-collapse-item__arrow el-icon-arrow-right"
          :class="{'is-active': isActive}"
        />
      </div>
    </div>
    <el-collapse-transition>
      <div
        v-show="isActive"
        :id="`el-collapse-content-${id}`"
        class="el-collapse-item_wrap"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`el-collapse-head-${id}`"
      >
        <div class="el-collapse-item__content">
          <slot />
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
import ElCollapseTransition from '../../../transitions/collapse-transition';
  import { generateId } from '../../../utils/util';
export default {
    name:'ElCollapseItem',
    componentName: 'ElCollapseItem',
    components:{
      ElCollapseTransition
    },
    inject: ['collapse'],
    props:{
        title:String,
        name:{
            type:[String,Number],
            default(){
                //当前组件的实例ID Vue自带的
                return this._uid
            }
        },
        disabled:Boolean
    },
    data(){
      return {
        id:generateId()
      }
    },
    computed:{
        isActive(){
            return this.collapse.activeNames.indexOf(this.name)>-1
        }
    },
    methods:{
      handleHeaderClick(){
        
      }
    }
}
</script>
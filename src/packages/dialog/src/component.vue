<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    Dialog
  </transition>
</template>
<script>
export default {
    name: 'ElDialog',
    methods:{
        afterEnter() {
            this.$emit('opened');
        },
        afterLeave() {
            this.$emit('closed');
        }
    }
}
</script>
<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'liForm',
  props: {
    // 表单控件绑定的数据对象，在校验或重置时会访问该数据对象下对应的表单数据，
    model: {
      type: Object
    },
    // 表单验证规则
    rules: {
      type: Object
    }
  }
}
</script>

<style scope>
</style>

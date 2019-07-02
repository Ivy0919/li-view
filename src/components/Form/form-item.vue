<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'liFormItem',
  props: {
    // 单个表单组件的标签文本，类似原生的 <label> 元素
    label: {
      type: String,
      default: ''
    },
    // 对应表单域 Form 组件 model 里的字段，用于在校验或重置时访问表单组件绑定的数据
    prop: {
      type: String
    }
  }
}
</script>

<style scope>
</style>

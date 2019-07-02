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
  // mixins: [ Emitter ],
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
  },
  created () {
    if (this.prop) {
      this.$on('on-form-change', this.onFieldChange);
      this.$on('on-form-blur', this.onFieldBlur);
    }
  },
  mounted () {
    // 如果没有prop，则不需要校验
    if (this.prop){
      this.dispatch('liForm', 'on-form-item-add', this);
    }
  },
  beforeDestroy () {
    this.dispatch('liForm', 'on-form-item-remove', this)
  }
}
</script>

<style scope>
</style>

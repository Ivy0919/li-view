<template>
  <input 
        type="text" 
        :value="currentValue"
        @input="handleInput"
        @blur="handleBlur"
        />
</template>

<script>
export default {
  name: 'liInput',
  // mixins: [ Emitter ],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value  
    }
  },
  watch: {
    value (val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit('input', value);
      this.dispatch('liFormItem', 'on-form-change', value);
    },
    handleBlur () {
      this.dispatch('liFormItem', 'on-form-blur', this.currentValue)
    }
  }
}
</script>

<style>
</style>

<template>
  <input 
    type="text" 
    class="unified-style r-input"
    @focus="focus"
    @change="change"
    @input='input'
    @blur="blur"
    @keydown="keydown"
    @keyup="keyup"
    @keypress="keypress"
  >
</template>
<script>
export default {
  name: 'RInput',
  props: {
    values: {
      type: String
    }
  },
  methods: {
    focus(v) {
      this.emitEvent('focus',v);
    },
    blur(v){
      this.emitEvent('blur',v);
    },
    change(v) {
      this.emitEvent('change',v);
    },
    input(v) {
      this.emitEvent('input',v);
    },
    keydown(v) {
      this.emitEvent('keydown',v);
    },
    keyup(v) {
      this.emitEvent('keyup',v);
    },
    keypress(v) {
      this.emitEvent('keypress',v);
    },
    async emitEvent(type,v) {
      await this.$emit(type,v);
      await this.$emit('primeval', {type,v});
      if(type === 'input') {
        this.$emit('update:values',v.target.value)
      }
    }
  },
}
</script>
<style lang="scss">
  .r-input{
    font-size:$fontSize;
    font-weight: normal;
    color: $fontColor;
    line-height: $lineHeight;
    border: 1px solid $fontColor;
    border-radius: $borderRaius;
    padding-left:6px;
    transition: border-color .3s ease-in-out;
    &:focus {
      outline: 0;
      border-color:$bgColor;
    }
  }
</style>
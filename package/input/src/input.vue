<template>
  <div class="unified-style r-input-container">
    <input 
      type="text" 
      @focus="focus"
      @change="change"
      @input='input'
      @blur="blur"
      @keydown="keydown"
      @keyup="keyup"
      @keypress="keypress"
    >
  </div>
</template>
<script>
export default {
  name: 'RInput',
  props: {
    value: {
      type: String
    },
    // 事件传递的方式 可以是单个往外传递 也可以是全部传递
    eventType: {
      type: String,
      default: 'single' // double
    },
  },
  model: {
    prop: 'value',
    event: 'inputs'
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
      this.$emit('inputs',v.target.value)
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
    emitEvent(type,v) {
      if(this.eventType.includes('single')) {
        this.$emit(type,v)
      }else {
        this.$emit('primeval', {type,v})
      }
    }
  },
}
</script>
<style lang="scss">
  .r-input-container{
    display: inline-block;
    padding-left: rem(6);
    min-width: rem(30);
    height: rem(24);
    font-size:$fontSize;
    font-weight: normal;
    color: $fontColor;
    border: 1px solid $fontColor;
    transition: border-color .3s ease-in-out;
    & > input {
      padding: 0;
      width: 100%;
      height: 100%;
      border: none;
      outline: 0;
      background: blanchedalmond;
    }
  }
</style>
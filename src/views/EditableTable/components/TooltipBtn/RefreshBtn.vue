<template>
  <div
    class="freshBtnBox"
    @click="refresh"
  >
    <div :class="boxClass">
      <svg-icon icon-class="btn_Refresh" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'RefreshBtn',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
  },
  emits: ['refresh'],
  setup(props, { emit }) {
    const refresh = () => {
      emit('refresh')
    }
    const boxClass = computed(() => {
      if (props.loading) {
        return 'flexBox animation'
      }
      return 'flexBox'
    })
    return {
      boxClass,
      refresh,
    }
  }
}
</script>

<style scoped lang="scss">
    @mixin flex-center {
    display: flex;
    align-items: center;
    }
  .freshBtnBox{
    @include flex-center;
    justify-content: center;
    margin: 0 10px;
    width: 40px;
    height: 40px;
    border: 1px solid #7d75eb;
    border-radius: 3px;
    font-size: 28px;
    cursor: pointer;
    &:hover{
      border: 1px solid #756dea;
    }
  }
  .flexBox{
    @include flex-center;
  }
  .animation{
    animation: rotation 0.8s linear infinite;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
</style>

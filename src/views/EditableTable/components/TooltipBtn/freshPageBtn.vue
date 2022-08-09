<template>
  <sky-tooltip-btn
    class="btn-item"
    content="刷新"
    :plain="true"
    btn-type="default"
    icon-name="skyicon-shuaxin"
    size="20"
    @click="$freshPage"
  />
</template>

<script>
// 刷新页面的按钮组件
// $freshPage 全局注册方法
export default {
  name: 'FreshPageBtn'
}
</script>

<style scoped>

</style>

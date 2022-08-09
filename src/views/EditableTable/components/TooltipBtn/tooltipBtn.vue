<template>
  <div
    :class="$attrs.class"
    :style="{...$attrs.style, lineHeight: minHeight ? '' : '1', display: 'inline-flex', verticalAlign: 'middle'}"
  >
    <el-tooltip
      :content="content"
      :placement="placement"
      :disabled="tooltipDisabled"
    >
      <template
        v-if="$slots.content"
        #content
      >
        <slot name="content" />
      </template>
      <div style="display:inline-flex">
        <el-button
          class="toolBtn"
          :class="{'is-rect': isRect, 'is-full': full}"
          :style="buttonStyle"
          :type="btnType"
          :disabled="disabled"
          :ncolor="type"
          :loading="loading"
          :plain="plain"
          v-bind="eventAttrs"
        >
          <i
            v-if="iconName && (iconName.includes('el-icon') || iconName.includes('skyicon'))"
            :class="[fontType, iconName]"
            :style="{fontSize: fontSize}"
          />
          <svg-icon
            v-else
            :icon-class="iconName"
            :font-size="fontSize"
          />
        </el-button>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'TooltipBtn',
  inheritAttrs: false, // 不继承所有绑定在当前元素上的属性
  props: {
    content: { // tooltip 文本
      type: String,
      default: '',
    },
    placement: { // tooltip 位置
      type: String,
      default: 'top-start'
    },
    iconName: { // 图标名称 支持 el-icon 和 skyicon
      type: String,
      required: true
    },
    btnType: { // el-button type属性
      type: String,
      default: 'primary'
    },
    type: { // 颜色类型
      type: String,
      default: 'primary'
    },
    rect: {
      type: Boolean, // 是否正方形按钮， 默认为是，如果是 text按钮，默认为 false
      default: true
    },
    disabled: { // 按钮是否禁用
      type: Boolean,
      default: false
    },
    tooltipDisabled: { // 是否禁用tooltip
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: { // 图标大小
      type: [String, Number],
      default: ''
    },
    minHeight: { // el-button 的默认样式控制了 min-height:40px 如果是 text类型的btn,可能高度不需要这么高，可以设置此值为auto
      type: String,
      default: undefined
    },
    full: { // 是否满高度的图标
      type: Boolean,
      default: false,
    }
  },
  computed: {
    // 所有的原生事件绑定到 button上， 例如 @click, @mouseenter等
    eventAttrs() {
      return Object.keys(this.$attrs).filter(key => key.startsWith('on')).reduce((obj, key) => {
        obj[key] = this.$attrs[key]
        return obj
      }, {})
    },
    buttonStyle() {
      return {
        minHeight: this.minHeight
      }
    },
    fontSize() {
      return this.full ? '40px' : !isNaN(this.size) ? this.size + 'px' : this.size
    },
    fontType() {
      let iconType = ''
      if (this.iconName.indexOf('skyicon') > -1) iconType = 'skyfont'
      return iconType
    },
    isRect() {
      return this.btnType !== 'text' && this.rect
    }
  }
}
</script>

<style lang="scss" scoped>
$btnSize: 40px;

.toolBtn{
  max-width: $btnSize;
  max-height: $btnSize;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 16px; //  === skyicon.fontSize
  &:not(.el-button--text) { /* 不明确 text类型的button是否要 40的宽高*/
    width: $btnSize;
    height: $btnSize;
    padding: 0;
  }
  &.el-button--text{
    display: inline-block;
  }
  &.is-loading :deep(span) {
    display: none;
  }
  &.is-disabled {/* 禁用 */
    filter: grayscale(100%)!important;
  }
  &.is-full { /* 是否占满的图标 */
    width: $btnSize;
    height: $btnSize;
    padding: 0;
  }
  & > :deep(span) {
    display: flex;
  }
}
</style>

<template>
  <div style="padding: 0 12px; line-height: 48px;" @click="toggleClick">
    <img src="../../assets/images/hamburger.svg" class="hamburger" alt="">
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>

<template>
  <div class="errPage-container">
    <ErrorA />
    <ErrorB />
    <h3></h3>
    <aside>
      Now the management system are basically 
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/error.html">
        Document introduction
      </a>
    </aside>
    <a href="#">
      <img src="https://wpimg.wallstcn.com/360e4842-4db5-42d0-b078-f9a84a825546.gif">
    </a>
  </div>
</template>

<script>
import ErrorA from './components/ErrorTestA'
import ErrorB from './components/ErrorTestB'

export default {
  name: 'ErrorLog',
  components: { ErrorA, ErrorB }
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>

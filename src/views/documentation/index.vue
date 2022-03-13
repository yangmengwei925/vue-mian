<template>
  <div class="app-container documentation-container">
    <router-view />
  </div>
</template>

<script>
// import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: {
    //  DropdownMenu
  },
  data() {
    return {
      value1: '',
      articleList: []
    }
  }
}
</script>

<style lang="scss" scoped>
.content-top {
  width: 100%;
  height: 200px;
  // background: red;
  display: flex;
  position: relative;
}
.content-input {
  position: absolute;
  top: 35px;
  left: 5px;
  outline: medium;
  height: 30px;
   border:1px solid #ccc
}
// .documentation-container {
//   margin: 50px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: flex-start;

//   .document-btn {
//     flex-shrink: 0;
//     display: block;
//     cursor: pointer;
//     background: black;
//     color: white;
//     height: 60px;
//     padding: 0 16px;
//     margin: 16px;
//     line-height: 60px;
//     font-size: 20px;
//     text-align: center;
//   }
// }
</style>


<template>
  <div class="index-container">
    <Layout>
      <template #left>
        <SideBar />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
import SideBar from './components/SideBar'
export default {
  name: 'Index',
  components: { Layout, SideBar },
  data() {
    return {
      show: false
    }
  },
  computed: {},
  created() { },
  methods: {
    // 关闭
  }
}
</script>

<style scoped lang="scss">
// * {
//   list-style: none;
//   padding:0;
//   margin:0
// }
// .index-container {
//   width: 100%;
//   height: 100%;

//   // overflow-y: hidden;
// }
// .left {
//   width: 100%;
//   height: 100%;
//   position: relative;
// }
// .content_title {
//   width: 100%;
//   height: 20px;
//   // box-sizing: border-box;
//   border-radius: 2px;
//   border: 1px solid rgba(254, 204, 0, 0.7);
//   background: rgba(254, 204, 0, 0.08);
//   font-size: 12px;
//   line-height: 20px;

//   // display: flex;
//   // justify-content: space-between;
// }
// .ACCM {
//   width: 100%;
//   height: 120px;
//    display: flex
// }
// .ACCM li {
//   // width: 150px;
//   height: 100px;
//   line-height: 100px;
//   border:1px solid #ccc;
//   text-align: center;
//   background: rgb(240, 238, 238);
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//  margin:10px 30px;
//  font-size: 12px;
//  color:rgb(24, 23, 23)
// }
// .ACCM li:hover{
//     box-shadow: rgb(235, 228, 228) 10px 10px 30px 5px ;//边框阴影
// }
</style>


/* eslint-disable no-implied-eval */

<template>
  <div class="layout-container">
    <!-- <div class="top">
      <icons icon-class="password" class="btn-icon" @click="handleSideBarShow" />
      <div class="triangle triangle-l">
        <span style>首页</span>
      </div>
    </div>
    <div class="content">
      <div class="left" :class="{ show: sidebarShow }">
        <slot id="menu2" name="left" class="menu2_hide" />
      </div>
      <div class="main">
        <slot />
      </div>
    </div> -->
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// var timer
// document.getElementById('menu1').onmouseover = function() {
//   document.getElementById('menu2').className = 'menu2_show'
// }
// document.getElementById('menu1').onmouseout = function() {
//   // eslint-disable-next-line no-implied-eval
//   timer = setTimeout("document.getElementById('menu2').className='menu2_hide';", 200)
// }
// document.getElementById('menu2').onmouseover = function() {
//   // eslint-disable-next-line indent
//                clearTimeout(timer)
//   document.getElementById('menu2').className = 'menu2_show'
// }
// document.getElementById('menu2').onmouseout = function() {
//   document.getElementById('menu2').className = 'menu2_hide'
// }
import icons from '@/components/SvgIcon'
export default {
  components: { icons },
  data() {
    return {
      // sidebarShow: false

    }
  },
  methods: {
    // handleSideBarShow() {
    //   this.sidebarShow = !this.sidebarShow
    // }

  }
}
</script>

<style scoped lang="scss">
// .layout-container {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;

//   .top {
//     width: 100%;
//     height: 68px;
//     position: relative;
//     background-color: #333;
//     .btn-icon {
//       color: #fff;
//       position: absolute;
//       top: 30px;
//       left: 30px;
//       cursor: pointer;
//     }
//     .icon-right {
//       position: absolute;
//       top: 0;
//       left: 1px;
//       right: 11px;
//       background-color: hsla(0, 0%, 100%, 0.08);
//       text-align: left;
//       -webkit-box-sizing: border-box;
//       box-sizing: border-box;
//       padding-left: 12px;
//       padding-right: 24px;
//       height: 32px;
//       font-size: 14px;
//       line-height: 32px;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//       font-weight: 400;
//     }
//   }
//   .content {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex: 1;
//     .left {
//       flex: 0 0 auto;
//       overflow: hidden;
//       transition: all 0.5s;
//       margin-left: -407px;
//       &.show {
//         margin-left: 0px;
//       }
//     }
//     .main {
//       flex: 1 1 auto;
//       overflow: hidden;
//     }
//   }
// }
// .triangle-l {
//   margin-left: 100px;
//   display: block;
//   line-height: 80px;
//   color:#fff;
//    cursor: pointer;
// }
</style>

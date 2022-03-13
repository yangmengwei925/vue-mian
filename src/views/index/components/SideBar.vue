
<template>
  <div

    id=""
    class="sidebar"
  >
    <div class="sidebar-block">
      <span class="sidebar-block-type">全局导航</span>
      <ul>
        <li>事件检索</li>
      </ul>
    </div>
    <div class="sidebar-block2">
      <span class="sidebar-block-type" style="margin-left:20px">综合管控</span>
      <ul class="ul">
        <li>事件检索</li>
        <li>事件处理</li>
        <li>事件检索</li>
        <li>重点人员识别</li>
        <li>陌生人识别</li>
        <li>高频人员识别</li>
        <li>人车智能搜索</li>
        <li>人体识别</li>
        <li>车辆识别</li>
        <li>人体测温管理</li>
        <li>客流量</li>
        <li>人员密度</li>
        <li>客流量同环比</li>
        <li style="margin-right:140px">人员密度同环比</li>
      </ul>
    </div>
    <div class="sidebar-block2" style="margin-top:430px">
      <span class="sidebar-block-type" style="margin-left:10px">视频监控</span>
      <ul class="ul">
        <li>实时预览</li>
        <li>录像回放</li>
        <li>图片查询</li>
        <li>高空抛物事件...</li>
      </ul>
    </div>
    <div class="sidebar-block2" style="margin-top:650px">
      <span class="sidebar-block-type" style="margin-left:10px">一卡通</span>
      <ul class="ul">
        <li>人员发卡</li>
        <li>门禁管理</li>
        <li>访客管理</li>
        <li>可视对讲</li>
        <li>梯控管理</li>
        <li>巡更</li>
        <li>考勤管理</li>
      </ul>
    </div>
    <!-- <div class="sidebar-block2" style="margin-top:1050px">
      <span class="sidebar-block-type" style="margin-left:10px">一卡通</span>
       <ul class="ul">
        <li>人员发卡</li>
        <li>门禁管理</li>
        <li>访客管理</li>
        <li>可视对讲</li>
         <li>梯控管理</li>
         <li>巡更</li>
         <li>考勤管理</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      seen: false
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 407px;
  height: 100%;
  display: flex;
  background-color: #373737;
  overflow: hidden;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &-block {
    padding: 20px;
    &-type {
      color: gray;
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      gap: 10px;
      margin-left: 2px;
      li {
        width: 105px;
        height: 40px;
        line-height: 40px;
        border: 1px solid gray;
        color: #fff;
        text-align: center;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        margin-left: 2px;

        &:hover {
          background-color: lighten(gray, 5%);
          border: 1px solid lighten(gray, 10%);
        }
      }
    }
  }
}
.sidebar-block1 {
  margin-top: 150px;
  width: 405px;
  height: 200px;
  position: absolute;
  // left:0;
  // background: red;
  .ul {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 10px;

    li {
      width: 115px;
      height: 40px;
      line-height: 40px;
      border: 1px solid gray;
      color: #fff;
      text-align: center;
      font-size: 14px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      margin-left: 2px;
      // display: flex;
      // flex-wrap: wrap;
      &:hover {
        background-color: lighten(gray, 5%);
        border: 1px solid lighten(gray, 10%);
      }
    }
  }
}
.sidebar-block1 > ul {
  margin-left: 10px;
}
.sidebar-block2 {
  margin-top: 150px;
  width: 405px;
  height: 500px;
  position: absolute;
  background-color: #373737;
  // left:0;
  // background: red;
  .ul {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    gap: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 115px;
      height: 40px;
      line-height: 40px;
      border: 1px solid gray;
      color: #fff;
      text-align: center;
      font-size: 14px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s;
      margin-left: 5px;
      // display: flex;
      // flex-wrap: wrap;
      &:hover {
        background-color: lighten(gray, 5%);
        border: 1px solid lighten(gray, 10%);
      }
    }
  }
}
</style>

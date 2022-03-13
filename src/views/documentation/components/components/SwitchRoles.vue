<template>
  <!-- <div class="app-container documentation-container"> -->
    <div class="content">
      <div class="content-top">
        <div style="position: relative">
          <span style="position: relative; top: 10px">姓名</span>
          <input type="text" style class="content-input input" />
        </div>
        <div style="margin-left: 180px; margin-top: 10px">
          <span>预计来访时间</span>
          <div class="block" style="margin-top: 10px">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>
        </div>
        <div style="margin-left: 120px; margin-top: 10px">
          <span>预计离开时间</span>
          <div class="block" style="margin-top: 10px">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </div>
        </div>
        <div style="margin-left: 20px; margin-top: 35px">
          <el-row>
            <el-button type="danger" plain>查询</el-button>
            <el-button type="info" plain>重置</el-button>
          </el-row>
          <div
            style="
              position: absolute;
              margin-left: 180px;
              margin-top: -35px;
              cursor: pointer;
            "
          >
            <i class="el-icon-caret-bottom" />
          </div>
        </div>
        <div />
      </div>
      <!-- 展开收起 -->
      <div class="">
        <div class="">
          <div style="">
            <span style="position: relative; top: -10px">性别</span>
            <el-select
              v-model="value"
              clearable
              placeholder="请选择"
              style="position: absolute; left: 50px; margin-top: 20px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div style="margin-left: 200px; margin-top: -45px">
            <span style="position: relative; top: 20px; left: 60px"
              >车牌号码</span
            >
            <el-input
              v-model="input"
              placeholder="请输入内容"
              style="
                width: 200px;
                margin-top: 50px;
                position: absolute;
                margin-left: 0px;
              "
            ></el-input>
          </div>
          <div style="margin-left: 550px; margin-top: 10px">
            <span style="position: relative; top: -2px; left: 50px"
              >证件类型</span
            >
            <el-select
              v-model="value1"
              placeholder="请选择"
              style="position: absolute; top: 240px"
            >
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1"
              />
            </el-select>
          </div>
          <div
            style="margin-left: 950px; margin-top: -30px; position: relative"
          >
            <span style="position: absolute; top: 10px; margin-left: 1px"
              >证件号码</span
            >
            <el-input
              v-model="input"
              placeholder=""
              style="
                width: 200px;
                margin-top: 40px;
                position: absolute;
                margin-left: 10px;
              "
            ></el-input>
          </div>
          <div style="position: relative">
            <span style="position: relative; top: 80px">来访单位</span>

            <el-select
              v-model="value2"
              placeholder="全部"
              style="position: absolute; top: 120px; left: -2px"
            >
              <el-option
                v-for="item in options3"
                :key="item.value2"
                :label="item.label"
                :value="item.value2"
              />
            </el-select>
          </div>
          <!-- //访客校验 -->
          <div style="position: relative">
            <span
              style="position: relative; top: 65px; left: 260px;margin:65px}"
              >访客验证码</span
            >
            <el-input
              v-model="input"
              placeholder="请输入内容"
              style="
                width: 200px;
                margin-top: 100px;
                position: absolute;
                margin-left: 180px;
              "
            ></el-input>
          </div>
          <!-- 被访对象 -->
          <div style="position: relative">
            <span style="position: relative; top: 50px; left: 600px"
              >被访对象</span
            >
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable
              style="
                width: 200px;
                position: absolute;
                margin-left: 550px;
                margin-top: 80px;
              "
            >
            </el-input>
          </div>
          <!-- 所属组织 -->
           <div style="position: relative">
               <span style="position: relative; top: 40px; left: 950px"
              >所属组织</span>
                     <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable
              style="
                width: 200px;
                position: absolute;
                margin-left: 900px;
                margin-top: 65px;
              "
            >
            </el-input>
            <!-- 来访事由 -->
           <div style="position: relative">
              <span style="position: relative; top: 100px; left: 0px"
              >来访事由</span>
                <el-input
              placeholder=""
              v-model="input"
              clearable
              style="
                width: 200px;
                position: absolute;
                margin-top: 135px;
                margin-left:-60px
              "
            >
            </el-input>
            </div>
            <!-- 状态 -->
             <div style="position: relative">
              <span style="position: relative; top: 80px; left: 250px"
              >状态</span>
                <el-input
              placeholder=""
              v-model="input"
              clearable
              style="
                width: 200px;
                position: absolute;
                margin-top: 115px;
                margin-left:220px
              "
            >
            </el-input>
            </div>
                <!-- 访客类型-->
             <div style="position: relative">
              <span style="position: relative; top: 80px; left: 600px"
              >访客类型</span>
                <el-input
              placeholder=""
              v-model="input"
              clearable
              style="
                width: 200px;
                position: absolute;
                margin-top: 115px;
                margin-left:220px
              "
            >
            </el-input>
            </div>
          <div />
          <div />
        
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: "SwitchRoles",
  components: {
    //  DropdownMenu
  },
  data() {
    return {
      input: "",
      // 性别
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "男",
        },
        {
          value: "选项3",
          label: "女",
        },
      ],
      // 证件类型
      options1: [
        {
          value1: "选项1",
          label: "全部",
        },
        {
          value1: "选项2",
          label: "身份证",
        },
        {
          value1: "选项3",
          label: "驾驶证",
        },
        {
          value1: "选项4",
          label: "工作证",
        },
        {
          value1: "选项5",
          label: "学生证",
        },
        {
          value1: "选项6",
          label: "军官证",
        },
        {
          value1: "选项7",
          label: "护照",
        },
        {
          value1: "选项8",
          label: "其他",
        },
      ],
      // 全部
      options3: [
        {
          value2: "选项1",
          label: "全部",
        },
      ],
      value: "",
      value1: "",
      value2: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.content-top {
  width: 100%;
  height: 120px;
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
  //
}

.input {
  border: 1px solid #ccc;
  margin-top: 5px;
}
.Verificationcode {
  position: absolute;
  margin-top: 70px;
  left: 230px;
  width: 280px;
  height: 40px;
  outline: medium;
  border: 1px solid #ccc;
}
.Verificationcode1 {
  position: absolute;
  margin-top: 50px;
  left: 600px;
  width: 220px;
  height: 40px;
  outline: medium;
  border: 1px solid #ccc;
}

.input-bottom {
  width: 100%;
  height: 300px;
  // background: red;
}
</style>

<template>
	<div class="index-container">
		<!-- <ul
      style="
        position: absolute;
        margin: 400px 100px 100px 1500px;
        overflow: hidden;
        border-left: 2px solid #eee;
      "
    >
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('entrance')">入口快捷</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('comprehensive')">综合管控</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('video')">视频监控</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('cartoon')">一卡通</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('vehicle')">车辆管控</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('AlarmDetection')">报警检测</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('FireManagement')">消防管理</li>
      <li style="color: rgb(223, 185, 140); line-height: 30px" onmouseover="change('NetworkManagement')">网络管理</li>
    </ul> -->
		<!-- 右侧 -->
		<div class="content">
			<div class="Entrance">
				<!-- 入口快捷 -->
				<div id="entrance"></div>
				<h3 class="quick">入口快捷</h3>
				<div style="" class="quick-title">
					在这里添加你常用的应用模块
				</div>
				<!-- </div> -->
			</div>
			<!-- 综合管控 -->
			<div class="CX">
				<div id="comprehensive"></div>
				<h3 class="comprehensiveControl">综合管控</h3>
				<div class="cC">提供丰富的业务联动和集成应用</div>
				<div class="Entrance">
					<ul class="ACCM">
						<router-link
							to="/documentation/visitor/pageEventSearch"
						>
							<li style="width: 150px; margin-top: 20px">
								事件搜索
							</li></router-link
						>
						<a href=""
							><li style="width: 150px; margin-top: 20px">
								事件处理
							</li></a
						>
						<a href=""
							><li style="width: 150px; margin-top: 20px">
								图上监控
							</li></a
						>
						<a href=""
							><li style="width: 150px; margin-top: 20px">
								重点人员识别
							</li></a
						>
						<a href=""><li style="width: 150px">陌生识别</li></a>
						<a href=""
							><li style="width: 150px">高频人员识别</li></a
						>
						<a href=""
							><li style="width: 150px">人车智能搜索</li></a
						>
						<a href=""><li style="width: 150px">人体识别</li></a>
						<a href=""><li style="width: 150px">车辆识别</li></a>
						<a href=""
							><li style="width: 150px">人体测温管理</li></a
						>
						<a href=""><li style="width: 150px">客流量</li></a>
						<a href=""><li style="width: 150px">人员密度</li></a>
					</ul>
				</div>
			</div>
			<!-- 视频监控 -->
			<div class="VideoMonitoring">
				<div id="video"></div>
				<h3 style="margin-left: 20px">视频监控</h3>
				<div class="quick-title" style="margin-top: -0.5px">
					提供丰富的业务联动和集成应用
				</div>
				<div class="Video">
					<ul class="ACCM-video">
						<li
							style="width: 150px"
							@click="
								this.$router.push({
									path:
										'/documentation/visitor/pageEventSearch?' +
										+new Date(),
								})
							"
						>
							事件搜索
						</li>
						<li style="width: 150px">事件处理</li>
						<li style="width: 150px">图上监控</li>
						<li style="width: 150px">重点人员识别</li>
					</ul>
				</div>
			</div>
			<!-- 一卡通 -->
			<div class="OneCartoon">
				<div id="cartoon"></div>
				<h3>一卡通</h3>
				<div class="quick-title">提供丰富的业务联动和集成应用</div>
				<div class="card">
					<ul class="ACCM-card" style="">
						<li style="width: 110px">人员发卡</li>
						<li style="width: 120px">门禁管理</li>
						<li style="width: 110px">访客管理</li>
						<li style="width: 110px">可视对讲</li>
						<li style="width: 110px">梯控管理</li>
						<li style="width: 100px">巡边</li>
						<li style="width: 100px">考勤管理</li>
						<li style="width: 100px">信息下发</li>
					</ul>
				</div>
			</div>
			<!-- 车辆管理 -->
			<div class="vehicle">
				<div id="vehicle"></div>
				<h3>车辆管控</h3>
				<div class="quick-title" style="margin: -0.5px 0 0 2px">
					利用车牌识别、GPS等技术，实现车辆的停车收费管理、行车监控、园区卡口
				</div>
				<div class="management">
					<ul class="ACCM-management">
						<li style="width: 100px">人员发卡</li>
						<li style="width: 100px">门禁管理</li>
						<li style="width: 100px">访客管理</li>
						<li style="width: 100px">可视对讲</li>
						<li style="width: 100px">梯控管理</li>
						<li style="width: 100px">巡边</li>
					</ul>
				</div>
			</div>
			<!-- 报警检测 -->
			<div class="police">
				<div id="AlarmDetection"></div>
				<h3>报警检测</h3>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
// import adminDashboard from './admin'
// import editorDashboard from './editor'
// let girl = document.getElementById('girl')
// let boy = document.getElementById('boy')
// let child = document.getElementById('child')
// function change(name) {
//     if (name =='girl'){
//         girl.style.display = 'block'
//         boy.style.display = 'none'
//         child.style.display = 'none'
//     }else if(name == 'boy'){
//         girl.style.display = 'none'
//         boy.style.display = 'block'
//         child.style.display = 'none'
//     }else if(name == 'child'){
//         girl.style.display = 'none'
//         boy.style.display = 'none'
//         child.style.display = 'block'
//     }
// }
export default {
	name: "Dashboard",
	components: {
		// adminDashboard, editorDashboard
	},
	data() {
		return {
			// currentRole: 'adminDashboard'
			//
		};
	},
	computed: {
		...mapGetters(["roles"]),
	},
	created() {
		// if (!this.roles.includes('admin')) {
		//   this.currentRole = 'editorDashboard'
		// }
	},
};
</script>
<style scoped lang="scss">
* {
	list-style: none;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.index-container {
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
}
.Entrance {
	position: relative;
	width: 60%;
	height: 200px;
	margin-left: 200px;
}
.quick {
	margin-left: 10px;
	position: absolute;
	margin-top: 2px;
}
.quick-title {
	color: rgb(172, 132, 80);
	width: 100%;
	position: absolute;
	margin: 40px 0 0 20px;
}
.CX {
	position: relative;
}
.comprehensiveControl {
	margin-left: 200px;
	position: absolute;
	margin-top: -28px;
}
.CX > .cC {
	position: absolute;
	margin-left: 200px;
	color: rgb(172, 132, 80);
}
// 综合管理
.Entrance {
	width: 1000px;
	height: 400px;
	margin: 20px 0 0 200px;
}
.Video {
	width: 1000px;
	height: 380px;
	margin-top: 20px;
}
.card {
	width: 800px;
	height: 380px;
	margin-top: 60px;
	position: absolute;
}
.management {
	width: 800px;
	height: 400px;
	margin-top: 20px;
}
.ACCM {
	//  width:100%;
	height: 200px;
	display: flex;
	// background:red
	display: flex;
	display: -webkit-flex;
	// justify-content: space-between;
	// flex-direction: row;
	flex-wrap: wrap;
}
.ACCM-video {
	width: 100%;
	// height:200px;
	// display:flex;
	// left:0
	display: flex;
	display: -webkit-flex;
	// justify-content: space-between;
	// flex-direction: row;
	flex-wrap: wrap;
}
.ACCM-card {
	//    width:100%;
	// height:200px;
	// display:flex;
	display: flex;
	display: -webkit-flex;
	// justify-content: space-between;
	// flex-direction: row;
	flex-wrap: wrap;
}
// 车辆管理
.ACCM-management {
	//    width:100%;
	// height:200px;
	// display:flex;
	display: flex;
	display: -webkit-flex;
	// justify-content: space-between;
	// flex-direction: row;
	flex-wrap: wrap;
}
.ACCM li {
	// width: 150px;
	height: 100px;
	line-height: 100px;
	// border:1px solid #ccc;
	text-align: center;
	background: rgb(240, 238, 238);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 10px 30px;
	font-size: 12px;
	color: rgb(24, 23, 23);
	cursor: pointer;
}
.ACCM-video li {
	// width: 150px;
	height: 100px;
	line-height: 100px;
	// border:1px solid #ccc;
	text-align: center;
	background: rgb(240, 238, 238);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 10px 30px;
	font-size: 12px;
	color: rgb(24, 23, 23);
	cursor: pointer;
}
.ACCM-card {
	width: 100%;
}
.ACCM-card li {
	height: 100px;
	line-height: 100px;
	// border:1px solid #ccc;
	text-align: center;
	background: rgb(240, 238, 238);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	//  margin:40px;
	// margin-top:50px;
	// margin-left:20px;
	margin: 10px;
	font-size: 12px;
	color: rgb(24, 23, 23);
	cursor: pointer;
}
.ACCM-management li {
	height: 100px;
	line-height: 100px;
	// border:1px solid #ccc;
	text-align: center;
	background: rgb(240, 238, 238);
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	font-size: 12px;
	color: rgb(24, 23, 23);
	cursor: pointer;
	margin: 20px 20px 0 0;
}
.ACCM li:hover {
	box-shadow: rgb(235, 228, 228) 10px 10px 30px 5px; //边框阴影
}
//  视频监控
.ACCM-video li:hover {
	box-shadow: rgb(235, 228, 228) 10px 10px 30px 5px; //边框阴影
}
//一卡通

.ACCM-card li:hover {
	box-shadow: rgb(235, 228, 228) 10px 10px 30px 5px; //边框阴影
}
//车辆管理
.ACCM-management li:hover {
	box-shadow: rgb(235, 228, 228) 10px 10px 30px 5px; //边框阴影
}
.VideoMonitoring {
	width: 800px;
	height: 200px;
	margin-left: 200px;
	position: relative;
}
//  一卡通
.OneCartoon {
	width: 800px;
	height: 300px;
	margin-left: 200px;
	position: relative;
	//  background:red
}
//车量管理
.vehicle {
	width: 800px;
	height: 200px;
	position: relative;
	margin: 30px 0 0 220px;
}
//报警
.police {
	width: 800px;
	height: 300px;
	position: relative;
	margin: 0px 0 0 220px;
	//  background:red
}
</style>

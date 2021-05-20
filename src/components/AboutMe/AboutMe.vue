<template>
  <div class="aboutme">
    <!-- 个人资料： element组件 -->
    <div class="title" style="padding：20px 20px 100px">
      <el-divider content-position="center">基本资料</el-divider>
     <div class="info">
        <div class="avatar">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <div class="self-info">
 <p>
        <el-tag effect="dark" size="medium ">姓名：田燕</el-tag>
        <el-tag>年龄：26岁</el-tag>
        <el-tag type="info">婚况：未婚</el-tag>
        <el-tag type="warning">籍贯：湖北</el-tag>
        <el-tag type="success">学历：本科</el-tag>
        <el-tag type="warning">工作经验：4年</el-tag>
      </p>
      <p>
         <el-tag type="warning">求职意向：Web前端工程师</el-tag>
        <el-tag type="danger">手机号码：17607148036</el-tag>
        <el-tag>邮箱：nicoletian233@163.com</el-tag>
      </p>
      </div>
     
     </div>
    </div>

    <!-- 专业技能： echarts实现 -->
    <div class="title" style="padding：20px 20px 100px">
      <el-divider content-position="center">专业技能</el-divider>
      <div class="skill">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
        <div id="main" style="width: 1200px;height:700px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts")
export default {
  name: "AboutMe",
  data() {
    return {
      activities: [
        {
          content:
            "掌握 jQuery 和 javascript，能写原生 js 代码，具有面向对象的编程思想，对 javascript中 的原型对象、原型链、作用域链、闭包、回调等有深刻的理解",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content:
            "熟练掌握JavaScript和ES6语法新特性，能够熟练使用 jQuery、BootStrap等第三方 类库和Swiper、ECharts 等插件完成开发",
          color: "#0bbd87",
        },
        {
          content:
            "熟练使用HTML5.CSS3的新特性，对前端性能优化，浏览器兼容有一定认识",
          size: "large",
          color:'#ff9232',
        },
        {
          content:
            "熟 练 使 用 Vue 前端框架并有相关项目经验, 能 够 使 用 Vue 全 家 桶 （vue+vuex+axios+vue-router）构建项目并配合ElementUI、Vant等框架开发",
            color:'#25cd98',
        },
        {
          content:
            "熟练使用rem配合媒体查询编写移动端页面，以及使用Less、Scss等CSS预编译器",
            color:'#0067ed'
        },
        {
          content:
            "熟练使用 Ajax 做前后台数据交互，对 Ajax 跨域问题有较好的理解，了解使用 JSONP解决浏览器端常见的跨域请求问题，了解 JSON 数据格式",
            color:'#569af6'
        },
        {
          content: "熟练使用git、yarn、npm、tnpm 等管理工具管理代码",
          color:'#76dfbd'
        },
        {
          content:
            "熟悉webpack 前端模块化打包工具, 了解 gulp前端自动化构建工具",
            color:'#4A70FF'
        },
        {
          content:
            "使用基于node.js的express框架搭建过简易的服务器, 对服务器端有一定的认识",
            color:'#ffb87d'
        },
        {
          content: "了解mysql、DBBrowser 数据库",
          color:'#f59d96'
        },
      ],
    }
  },
  mounted() {
    this.showMain()
  },
  methods: {
    showMain() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"))

      // 指定图表的配置项和数据
      var option = {
        legend: {
          top: "auto",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: [
            "jQuery",
            "Vue",
            "ES6/H5/C3",
            "ElementUI/Vant等框架",
            "Swiper/ECharts等插件",
            "Swiper/ECharts等插件",
            "git/yarn/npm/tnpm",
            "webpack/gulp",
            "mysql/db brower",
          ],
        },
        series: [
          {
            name: "专业技能",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1248, name: "jQuery" },
              { value: 975, name: "Vue" },
              { value: 879, name: "ES6/H5/C3", selected: true },
            ],
          },
          {
            name: "技能描述",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{b|{b}：}  {per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,

              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 72, name: "ElementUI/Vant等框架" },
              { value: 58, name: "Swiper/ECharts等插件" },
              { value: 97, name: "Swiper/ECharts等插件" },
              { value: 66, name: "git/yarn/npm/tnpm" },
              { value: 22, name: "webpack/gulp" },
              { value: 8, name: "mysql/db brower" },
            ],
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
  },
}
</script>
<style lang="less" scoped>
.aboutme {
  width: 100%;
 
  .title {
    margin: 40px auto 70px;
  }
  .info{
display: flex;
justify-content: center;
padding: 10px 30px;
 .avatar {
    width: 100px;
      height: 100px;
    .el-avatar {
      width: 100px;
      height: 100px;
    }
  }
  .self-info{
    margin-left: 40px;
    p {
    text-align: center;
  }
  }
  
  }
  .skill {
    display: flex;
    justify-content: center;
    .el-timeline {
      margin: 30px auto;
    }
    #main {
      margin: 30px auto;
    }
  }
}
</style>

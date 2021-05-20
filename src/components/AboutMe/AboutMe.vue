<template>
  <div class="aboutme">
    <!-- 个人资料： element组件 -->
    <div class="title" style="padding：20px 20px 100px">
      <el-divider content-position="center">基本资料</el-divider>
      <div class="avatar">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <p>
            <el-tag effect="dark" size="medium ">姓名：田燕</el-tag>
        <el-tag>年龄：26岁</el-tag>
        <el-tag type="success">学历：本科</el-tag>
        <el-tag type="info">婚况：未婚</el-tag>
        <el-tag type="warning">工作经验：4年</el-tag>
      </p>
      <p>
        <el-tag type="danger">手机号码：17607148036</el-tag>
        <el-tag>邮箱：nicoletian233@163.com</el-tag>
      </p>
    </div>

    <!-- 专业技能： echarts实现 -->
    <div class="title" style="padding：20px 20px 100px">
      <el-divider content-position="center">专业技能</el-divider>
      <div id="main" style="width: 1200px;height:600px;"></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  name: "AboutMe",
  mounted() {
    this.showMain();
  },
  methods: {
    showMain() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));

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
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.aboutme {
  .avatar {
    margin: 0 auto;
    position: absolute;
    left: 20%;
  }
  p {
    text-align: center;
  }
  .title {
    margin: 40px auto 70px;
  }
  #main {
    margin: 30px auto;
  }
}
</style>

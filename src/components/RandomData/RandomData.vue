<template>
  <div class="random-data">
    <!-- 随机获取饼图数据 -->
    <el-divider content-position="center">随机获取饼图数据</el-divider>
    <div id="main1" style="width: 1100px;height:400px;"></div>

    <!-- 随机表格排序 -->
    <el-divider content-position="center">随机表格排序</el-divider>
    <el-table
      :data="tableData"
      border
     style="width: 90%;margin:60px auto;"
      :default-sort="{ prop: 'start', order: 'descending' }"
    >
      <el-table-column
        prop="start"
        label="开始日期"
        sortable
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="end"
        label="结束日期"
        sortable
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司名称"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="post" label="岗位" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  name: "RandomData",
  data() {
    return {
      tableData: [
        {
          start: Math.ceil(Math.random() * 10000),
          end: "2021-11111111",
          company: "公司公司公司1111111111111",
          post: "岗位岗位",
        },
        {
          start: Math.ceil(Math.random() * 10000),
          end: "2020-2222222",
          company: "公司公司公司22222222222",
          post: "岗位岗位",
        },
        {
          start: Math.ceil(Math.random() * 10000),
          end: "2020-333333333333",
          company: "公司公司公司3333333",
          post: "岗位岗位",
        },
        {
          start: Math.ceil(Math.random() * 10000),
          end: "2020-4444444444",
          company: "公司公司公司4444444",
          post: "岗位岗位",
        },
        {
          start: Math.ceil(Math.random() * 10000),
          end: "2020-55555555555",
          company: "公司公司公司55555",
          post: "岗位岗位",
        },
        {
          start: Math.ceil(Math.random() * 10000),
          end: "2020-66666666",
          company: "公司公司公司6666666",
          post: "岗位岗位",
        },
      ],
    };
  },
  mounted() {
    this.showMain();
    // 每隔10s刷新一下页面
    setTimeout(function() {
      window.location.reload();
    }, 10000);
  },
  methods: {
    showMain() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main1"));

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
              { value: Math.random() * 10000, name: "jQuery" },
              { value: Math.random() * 10000, name: "Vue" },
              {
                value: Math.random() * 10000,
                name: "ES6/H5/C3",
                selected: true,
              },
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
              { value: Math.random() * 100, name: "ElementUI/Vant等框架" },
              { value: Math.random() * 100, name: "Swiper/ECharts等插件" },
              { value: Math.random() * 100, name: "Swiper/ECharts等插件" },
              { value: Math.random() * 100, name: "git/yarn/npm/tnpm" },
              { value: Math.random() * 100, name: "webpack/gulp" },
              { value: Math.random() * 100, name: "mysql/db brower" },
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
.random-data {
    width: 100%;
  #main1 {
    margin: 30px auto;
  }
  .el-table{
      margin: 0 auto 0;
  }
}
</style>

<template>
  <div class="project">
    <!-- 工作经历/项目经验： ele表格实现 -->
    <div class="pro-job">
      <el-divider content-position="center">工作经历</el-divider>
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 90%;margin:60px auto;"
      >
        <el-table-column type="expand" align="center">
          <template slot-scope="props">
            <el-form label-position="top" inline class="table-expand">
              <el-form-item label="项目名称：">
                <span>{{ props.row.proname }}</span>
              </el-form-item>
              <el-form-item label="项目类别：">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="可访问地址：">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="项目描述：">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="项目职责：">
                <span>{{ props.row.con }}</span>
              </el-form-item>
              <el-form-item label="技术描述">
                <span>{{ props.row.info }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="任职时间" prop="time" align="center">
        </el-table-column>
        <el-table-column label="工作单位" prop="name" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>任职时间: {{ scope.row.time }}</p>
              <p>工作单位: {{ scope.row.name }}</p>
              <p>任职岗位: {{ scope.row.id }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="任职岗位" prop="id" align="center">
        </el-table-column>
        <el-table-column label="项目名称" prop="proname" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>项目名称: {{ scope.row.proname }}</p>
              <p>项目类别: {{ scope.row.category }}</p>
              <p>访问地址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.proname }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="项目类别" prop="category" align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      tableData: [
        {
          name: "上海得逸信息技术有限公司",
          time: "2020.09--至今",
          id: "Web前端开发",
          proname: "腾讯企点webim",
          category: "jQuery",
          address: "https://wpa1.qq.com/M8e63GZR?_type=wpa&qidian=true",
          desc:
            "腾讯企点webim是一个即时通讯的产品, 通过微信公众号, 小程序, qq, 网页等全渠道通路来帮 助客户构建完善的运营体系.",
          con:
            "1. 独立完成了该项目音视频通话, 语音输入, 转人工接待, 机器人导航等核心模块的开发 2. 完成项目对接客户之后所有的运营问题点的定位及跟进处理 3. 完成不定期项目相关的活动及专题需求的开发的工作； 4. 协同同事进行后台数据请求与数据交换。 5. 参与项目规划设计，以及插件的选取使用。",
          info:
            "1. 项目整体使用jquery+ajax构建, 使用短链转长链的方式，同时实现pc和h5的双向兼容. 2. 运用trtc实现b端和c端pc界面音视频流的互通传输, 同时使用postmessage实现两个单页 面之间的数据传输; 3. 实时录音功能压缩成为最小的amr格式进行双向传输, 并且在录音过程中完成了音频频率 波动的可视化图形展现; 4. 利用 localStorage 来保存客服和客户之间的聊天记录, 整体通信流程使用websocket实 现双向传输.;",
        },
        {
          name: "上海得逸信息技术有限公司",
          time: "2020.09--至今",
          id: "Web前端开发",
          proname: "腾讯企点账户中心",
          category: "Vue",
          address: "https://admin.qidian.qq.com",
          desc:
            "腾讯企点账户中心是一个客户端账户配置的产品, 相当于腾讯企点的后台管理系统, 使用 vue 框架进行架构，里面包含客户的用户群体中的各项指标以及客户名下各个账号的设置配置, 实现了 登录注册、权限管理、表单校验、 信息的增删改查, 为管理者提供了一个完整的双链管理结构.",
          con:
            "1. 独立完成了该项目超时结束会话提醒, 企业屏蔽，多通路中机器人导航的接待配置等核心 模块的开发 2. 完成项目对接客户之后所有的运营问题点的定位及跟进处理 3. 负责项目相关页面的布局及交互，高度还原设计稿 4. 根据业务需求和使用频率，封装高复用、可维护性强的通用组件, 提高二次开发效率;",
          info:
            "1. 项目整体使用 vue 全家桶(vue＋vuex＋vue-router＋axios)进行技术开发工作; 2. 使用html+css+v-html完成页面的结构并且实现风格统一的简单组件的共用; 3. 使用 vuex 解决组件之间同一状态的共享问题,利用 localStorage 来保存用户的登录信息， 以此决定是否需要展示新手引导功能; 4. 通过axios实现数据的动态交互 5. 使用token进行登录状态的判断, 退出或访问页面时使用了本地存储进行了拦截。",
        },
        {
          name: "武汉市可待科技有限公司",
          time: "2017.06--2020.08",
          id: "Web前端开发",
          proname: "西柚教育官网",
          category: "PC",
          address: "http://www.liexue.cn/",
          desc:
            "西柚教育官网是基于 html+css 开发的 pc 端网站，让用户更全面的了解到西柚教育。",
          con:
            "实现页面的部分交互效果,首页搭建，回到顶部逻辑功能和底部链接跳转，参与完成整合项 目的优化，提高用户体验度。",
          info:
            "1. 通过使用 HTML+CSS 完成页面的静态布局； 2.使用 SuperSlide 插件实现首页轮播图和新闻轮播效果。 3.通过 CSS3 实现各种动态特效，提升用户体验。 4.通过 Ajax 技术读取后台数据，结合 template 模板完成页面的渲染。",
        },
        {
          name: "武汉市可待科技有限公司",
          time: "2017.06--2020.08",
          id: "Web前端开发",
          proname: "快乐购",
          category: "H5",
          address: "https://m.happigo.com",
          desc:
            "快乐购是一个基于 vue 的综合购物商城,包括时尚女装、男装、潮流鞋品、美容化妆、礼 品饰品、数码产品、食品等,为您提供网上商城购物体验。",
          con:
            "1. 完成项目底层的架构搭建； 2. 独立完成了该项目首页、全部分类、最新团购等核心模块的开发；3. 完成不定期项目相关的活动及专题页面的开发的工作； 4. 协同同事进行后台数据请求与数据交换。",
          info:
            "1. 项目使用 vue-cli 脚手架，整体使用 vue 全家桶(vue＋vuex＋vue-router＋axios); 2. 运用 swiper 插件实现页面轮播图; 3. 底部tab 选项卡使用vue-router 中的router 对象配置路由，通过不同的路由在router- view视图容器中展 示不同的组件; 4. 使用 vuex 解决组件之间同一状态的共享问题,利用 localStorage 来保存用户的登录信息; 5. 通过 axios 获取后端接口数据在相关页面进行展示。",
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.project {
    width: 100%;
  .pro-job {
     margin: 40px auto 70px;
    .table-expand {
      font-size: 0;
      label {
        width: 90px;
        color: #99a9bf;
      }
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 100%;
        .el-form-item__label {
          font-weight: bold;
          padding-right: 20px;
        }
      }
    }
  }
}
</style>

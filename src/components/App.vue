<template>
  <div class="menupage">
    <el-row class="tac">
      <el-col :span="11">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/aboutme"
            ><router-link to="/aboutme" tag="div"
              >个人简历</router-link
            ></el-menu-item
          >
          <el-menu-item index="/project"
            ><router-link to="/project" tag="div"
              >工作项目列表</router-link
            ></el-menu-item
          >
          <el-menu-item index="/randomdata"
            ><router-link to="/randomdata" tag="div"
              >随机图表数据</router-link
            ></el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/aboutme",
    }
  },
  mounted() {
    this.activeIndex = window.location.href.split("#")[1]
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped>
.menupage {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  .el-col,
  ul {
    width: 150px;
    height: 100%;
    line-height: 100px;
    }
  }
  ul{
    li.el-menu-item {
      height: 80px;
      line-height: 80px;
  }
  .logo-title {
    .el-icon-user {
      margin-right: 10px;
    }
  }
}
</style>

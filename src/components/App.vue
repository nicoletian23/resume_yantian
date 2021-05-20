<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
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
          >随机图表数据展示</router-link
        ></el-menu-item
      >
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/aboutme",
    };
  },
   mounted() {
       this.activeIndex =window.location.href.split("#")[1]
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>

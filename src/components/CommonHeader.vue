<template>
  <div class="header-container">
    <div class="l-content">
      <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!--  面包屑  -->
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    <img class="user" src="@/assets/images/user.png" alt=""/>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  methods:{
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style scoped lang="less">
.header-container {
  padding: 0 20px;
  background: #333;
  height: 60px;
  display: flex; //使用弹性布局
  justify-content: space-between; //两端对齐
  align-items: center; //垂直居中
  .text {
    color: #ffffff;
    font-size: 14px;
    margin-left: 10px;
  }

  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

}
</style>
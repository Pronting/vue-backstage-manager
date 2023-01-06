<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";

export default {
  name: "Main",
  components: {CommonHeader, CommonAside}
}
</script>

<style scoped>
.el-header {
  padding: 0;

}
.el-aside{
  overflow: visible;
}
</style>
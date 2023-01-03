<template>
  <div>
    <h1>我是Main</h1>
    <el-container>
      <el-aside width="200px">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside";
export default {
  name: "Main",
  components:{CommonAside}
}
</script>

<style scoped>

</style>
<template>
  <div class="login">
    <h4 class="user">用户名</h4>
    <input type="text" class="text" />
    <h4 class="password">密码</h4>
    <input type="password" class="pwd" @keyup.enter="onRegister" />

    <el-button class="btn" @click="onRegister">立即注册</el-button>
    <span>已有账号？<router-link to="/Login">立即登录</router-link></span>
  </div>
</template>
<script src="./template.js"></script>
<style  src="./template.less" lang="less" ></style>

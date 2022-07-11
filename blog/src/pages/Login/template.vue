<template>
  <div class="login">
    <h4 class="user">用户名</h4>
    <input type="text" class="text" placeholder="用户名" v-model="username" />
    <h4 class="password">密码</h4>
    <input type="password" class="pwd" placeholder="密码" v-model="password" @keyup.enter="onLogin()" />

    <el-button class="btn" @click="onLogin()">立即登录</el-button>
    <span>没有账号?<router-link to="/register">注册新用户</router-link></span>
  </div>
</template>
<script src="./template.js"></script>
<style  src="./template.less" lang="less" scoped></style>

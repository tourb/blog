<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar" />
      <h3>{{ title }}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{ user.username }}</router-link> 发布于{{ user.createdAt | formatDate }}
      </p>
    </section>
    <section class="article" v-html="rawContent"></section>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>

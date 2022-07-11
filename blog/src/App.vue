<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view />
    </main>
    <Footer1 id="footer"></Footer1>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer1 from '@/components/footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer1
  }
}
</script>
<style lang="less">
@import './assets/common.less';
</style>

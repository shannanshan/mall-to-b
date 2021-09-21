<template>
  <div class="home-container">
    <HomeLeft />
    <div :class="{ 'home-right': true, 'menu-unfold': $store.state.collapsed }">
      <HomeRightHeader />
      <RouterView />
    </div>
  </div>
</template>

<script>
import HomeLeft from './components/HomeLeft.vue';
import HomeRightHeader from './components/HomeRightHeader.vue';

export default {
  components: {
    HomeLeft,
    HomeRightHeader,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style lang="less">
@import "~@/assets/css/home.less";
</style>

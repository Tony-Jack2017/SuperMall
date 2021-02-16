<template>
  <div>
    <tabbar>

      <tabbar-item path="/home">
        <img slot="tab-item-active-icon" src="~assets/img/tabbar/home(1).svg" alt="">
        <img slot="tab-item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <div slot="tab-item-text">主页</div>
      </tabbar-item>

      <tabbar-item path="/category">
        <img slot="tab-item-active-icon" src="~assets/img/tabbar/category(1).svg" alt="">
        <img slot="tab-item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <div slot="tab-item-text">分类</div>
      </tabbar-item>

      <tabbar-item path="/cart">
        <img slot="tab-item-active-icon" src="~assets/img/tabbar/cart(1).svg" alt="">
        <img slot="tab-item-icon" src="~assets/img/tabbar/cart.svg" alt="">
        <div slot="tab-item-text">购物车</div>
      </tabbar-item>

      <tabbar-item path="/profile">
        <img slot="tab-item-active-icon" src="~assets/img/tabbar/my(1).svg" alt="">
        <img slot="tab-item-icon" src="~assets/img/tabbar/my.svg" alt="">
        <div slot="tab-item-text">我的</div>
      </tabbar-item>

    </tabbar>
  </div>
</template>

<script>
  import Tabbar from "../../common/tabbar/Tabbar";
  import TabbarItem from "../../common/tabbar/TabbarItem";

    export default {
        name: "MainTabbar",
      components:{
          Tabbar,TabbarItem
      }
    }
</script>

<style scoped>

</style>

<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="tab-item-active-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-item-icon"></slot>
    </div>
    <div :class="{active : isActive}">
      <slot name="tab-item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      path: String
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path)
      },

    },
    methods: {
      itemClick(){
        if (this.$route.path !== this.path)
        {
          this.$router.push(this.path)
        }
      }
    }
  }
</script>

<style scoped>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: #d81e06;
  }
</style>

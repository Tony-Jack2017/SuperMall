<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: "Tabbar",
    components: {
    }
  }
</script>

<style>
  #tabbar {
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 2px rgba(100, 100, 100, .1);
  }


</style>

<template>
  <article id="brick-component">
    <div class="brick-wrapper">
      <img :src="imageURL">
      <h3>{{ name }}</h3>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'brickComponent',
    props: ['name', 'imageURL']
  }
</script>

<style lang="scss" scoped>
  .brick-wrapper {
    background:#f5f5f5;
    padding:20px;
    border:1px solid #ccc;
  }
</style>

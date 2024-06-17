<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ count }}</p>
    <a :href="url">下载</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      count: 0,
      url: "",
    };
  },
};
</script>

<style>
.container {
  background-color: antiquewhite;
}
</style>

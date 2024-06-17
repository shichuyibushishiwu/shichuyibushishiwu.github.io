<template>
  <div class="container">
    <li v-for="command in commands">
      <div class="item">
        <img
          src="../public/assets/icon/duct.svg"
          :alt="command.name"
          :title="command.name"
        />
        <p class="title">{{ command.title }}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commands: [],
    };
  },

  methods: {
    getReleases() {
      this.commands.push({
        title: "当前视图过滤器",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "复制其他视图过滤器",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "材质管理",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "复制视图",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "风管系统",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "水管系统",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "桥架类型",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "过滤器",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "线型图案",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });

      this.commands.push({
        title: "视图样板",
        name: "filters",
        svg: "../public/assets/icon/duct.svg",
      });
    },
  },

  mounted() {
    this.getReleases();
  },
};
</script>

<style>
li {
  list-style: none;
}

.item {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 16px;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.title {
  padding: auto;
  margin: 0px 10px;
}
</style>

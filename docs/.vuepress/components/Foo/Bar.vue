<template>
  <p class="demo">
    {{ releases }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello this is <Foo-Bar>",
      releases: [],
    };
  },

  methods: {
    async getReleases() {
      try {
        const result = await fetch(
          "https://api.github.com/repos/shichuyibushishiwu/tuna.revit.release/releases"
        );
        this.releases = result.json();
        console.log(this.releases);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getReleases();
  },
};
</script>

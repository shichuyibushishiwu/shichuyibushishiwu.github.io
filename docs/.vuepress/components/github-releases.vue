<template>
  <div class="container">
    <li v-for="release in releases">
      <GithubRelease :name="release.name"></GithubRelease>
    </li>
  </div>
</template>

<script>
import GithubRelease from "./github-release.vue";

export default {
  data() {
    return {
      releases: [],
    };
  },

  methods: {
    getReleases() {
      const result = fetch(
        "https://api.github.com/repos/shichuyibushishiwu/tuna.revit.release/releases"
      )
        .then((response) => response.json())
        .then((data) => {
          for (const item of data) {
            if (item.assets === null) {
              continue;
            }
            if (item.assets.length === 0) {
              continue;
            }

            const asset = item.assets[0];
            this.releases.push({
              name: item.name,
              count: asset.download_count,
              url: asset.browser_download_url,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getReleases();
  },
};
</script>

<style>
.container {
  background-color: antiquewhite;
}
</style>

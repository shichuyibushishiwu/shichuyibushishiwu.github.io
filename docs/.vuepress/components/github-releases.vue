<template>
  <div class="container">
    <li v-for="release in releases">
      <div class="item">
        <p>{{ release.name }}</p>
        <p>{{ release.count }}</p>
        <p>
          <a :href="release.url">
            <svg
              t="1718633517191"
              class="icon"
              viewBox="0 0 1047 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4416"
              width="16"
              height="16"
            >
              <path
                d="M523.987449 0a42.759353 42.759353 0 0 0-42.759353 42.759353v498.158822L301.663529 361.353608a43.500845 43.500845 0 0 0-60.555153 0 42.759353 42.759353 0 0 0 0 60.431572l227.020033 227.267198a79.092445 79.092445 0 0 0 111.223751 0l227.514362-227.143616a42.635771 42.635771 0 0 0 0-60.555154 42.882935 42.882935 0 0 0-60.555153 0L566.870384 540.918175V42.759353A42.882935 42.882935 0 0 0 523.987449 0z"
                fill="#4D4D4D"
                p-id="4417"
              ></path>
              <path
                d="M860.871832 120.245233a42.882935 42.882935 0 1 0 0 85.642288 101.584359 101.584359 0 0 1 101.460777 101.584359v529.301473a101.584359 101.584359 0 0 1-101.460777 101.584359H187.226647a101.707941 101.707941 0 0 1-101.584359-101.584359V307.47188a101.707941 101.707941 0 0 1 101.584359-101.584359 42.882935 42.882935 0 0 0 0-85.642288A187.473811 187.473811 0 0 0 0 307.47188v529.301473a187.473811 187.473811 0 0 0 187.226647 187.226647h673.645185A187.350229 187.350229 0 0 0 1047.974897 836.773353V307.47188A187.350229 187.350229 0 0 0 860.871832 120.245233z"
                fill="#4D4D4D"
                p-id="4418"
              ></path>
            </svg>
          </a>
        </p>
      </div>
    </li>
  </div>
</template>

<script>
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
.item p {
  flex: 1;
}

.item p a {
  float: right;
}
</style>
